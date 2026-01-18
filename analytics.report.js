export function generateReport(token) {
  console.log("----- Token Factory Report -----");
  console.log("Name:", token.name);
  console.log("Symbol:", token.symbol);
  console.log("Decimals:", token.decimals);
  console.log("Total Supply:", token.totalSupply);
  console.log("Address:", token.address);
  console.log("--------------------------------");
}
