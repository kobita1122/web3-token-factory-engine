export const REGISTRY = [];

export function registerToken(token) {
  REGISTRY.push(token);
  console.log("Token registered:", token.symbol);
}
