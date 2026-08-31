from pathlib import Path
import json

for path in (Path('/tmp/world_cities_15000.json'), Path('/tmp/world_cities_5000.json')):
    records = json.loads(path.read_text())
    print(path.name)
    print('records=', len(records))
    print('countries=', len({record.get('country') for record in records}))
    print('with_coordinates=', sum(bool(record.get('lat')) and bool(record.get('lng')) for record in records))
    print('sample=', records[:2])
    print('last=', records[-2:])
