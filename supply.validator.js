export function validateSupply(supply) {
  return supply > 0 && supply <= 1000000000;
}
