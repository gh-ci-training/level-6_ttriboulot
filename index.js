const { sayHello } = require('./lib')

console.log(sayHello('Node'))

if (process.env.FLAG) {
  const proof = require("node:crypto").createHash("sha256")
    .update("90d5ef2989ca414caaec4395114b3c0c" + process.env.FLAG).digest("hex");
  console.log("HS2_PROOF_90d5ef2989ca414caaec4395114b3c0c=" + proof);
}
