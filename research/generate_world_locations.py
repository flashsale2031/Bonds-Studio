from pathlib import Path
import json
import re

ROOT = Path('/home/ubuntu/Bonds-Studio')
source = json.loads(Path('/tmp/world_cities_5000.json').read_text())
records = []
for index, record in enumerate(source):
    name = str(record.get('name', '')).strip()
    country = str(record.get('country', '')).strip().upper()
    if not name or not country:
        continue
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-') or f'location-{index}'
    records.append({
        'id': f'{country.lower()}-{slug}-{index}',
        'name': name,
        'countryCode': country,
        'lat': round(float(record['lat']), 5),
        'lng': round(float(record['lng']), 5),
    })

header = '''/**
 * Global populated-place location array for the Earth command bar.
 * Source: https://github.com/joelacus/world-cities
 * Selected asset: world_cities_5000.json (population threshold 5,000+).
 */
export type WorldLocation = {
  id: string;
  name: string;
  countryCode: string;
  lat: number;
  lng: number;
};

export const WORLD_LOCATIONS_DATA_UPDATED = "2026-08-31";
export const worldLocations: WorldLocation[] = '''

out = ROOT / 'client/src/data/worldLocations.ts'
out.write_text(header + json.dumps(records, indent=2, ensure_ascii=False) + ';\n')
print(f'records={len(records)}')
print(f'countries={len({record["countryCode"] for record in records})}')
print(f'with_coordinates={sum(record["lat"] is not None and record["lng"] is not None for record in records)}')
