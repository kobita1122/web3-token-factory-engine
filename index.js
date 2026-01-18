import { connectRPC } from "./rpc.client.js";
import { createToken } from "./factory.engine.js";
import { registerToken } from "./token.registry.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Token Factory Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();

const token = createToken("DemoToken", "DMT", 18, 1000000);
registerToken(token);

generateReport(token);
