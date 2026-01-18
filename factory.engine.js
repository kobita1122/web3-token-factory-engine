export function createToken(name, symbol, decimals, supply) {
  console.log("Creating token:", name);

  return {
    name,
    symbol,
    decimals,
    totalSupply: supply,
    address: "0xTOKENFACTORY001"
  };
}
