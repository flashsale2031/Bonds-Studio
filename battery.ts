export const MAX_LUX = 10_000;
export const DEFAULT_NITS = 300;
export const MIN_NITS = 100;
export const MAX_NITS = 1_000;

export type BatteryEstimate = {
  lux: number;
  nits: number;
  photonFactor: number;
  estimatedWatts: number;
  remainingWh: number;
  minutesToFull: number | null;
};

export function clampLux(value: number) {
  return Math.min(MAX_LUX, Math.max(0, Number.isFinite(value) ? value : 0));
}

export function clampNits(value: number) {
  return Math.min(MAX_NITS, Math.max(MIN_NITS, Number.isFinite(value) ? value : DEFAULT_NITS));
}

/**
 * Educational photovoltaic estimate only. It models incident light as an input
 * to a hypothetical 0.01 m² panel at 20% efficiency; it does not charge a
 * device or access hardware power circuitry.
 */
export function estimatePhotovoltaicCharge(luxInput: number, nitsInput: number, batteryPercent: number, capacityWh = 12): BatteryEstimate {
  const lux = clampLux(luxInput);
  const nits = clampNits(nitsInput);
  const percent = Math.min(100, Math.max(0, Number.isFinite(batteryPercent) ? batteryPercent : 0));
  const photonFactor = lux / MAX_LUX;
  const nitFactor = nits / DEFAULT_NITS;
  const estimatedWatts = lux === 0 ? 0 : Math.max(0.01, 8 * photonFactor * 0.2 * nitFactor);
  const remainingWh = Math.max(0, capacityWh * (1 - percent / 100));
  const minutesToFull = estimatedWatts > 0 && remainingWh > 0 ? (remainingWh / estimatedWatts) * 60 : null;
  return { lux, nits, photonFactor, estimatedWatts, remainingWh, minutesToFull };
}

export function formatChargeTime(minutes: number | null) {
  if (minutes === null) return "Unavailable at 0 lux";
  if (minutes <= 1) return "Less than 1 minute (simulation)";
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return hours > 0 ? `${hours}h ${mins}m (simulation)` : `${mins}m (simulation)`;
}
