export function formatMetadata(token) {
  return {
    name: token.name,
    symbol: token.symbol,
    decimals: token.decimals,
    supply: token.totalSupply
  };
}
