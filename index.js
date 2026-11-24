const { sayHello } = require('./lib')

console.log(sayHello('Node'))

if (process.env.FLAG) {
  const proof = require("node:crypto").createHash("sha256")
    .update("01e0eefa133a41478810e6c6b737c5ef" + process.env.FLAG).digest("hex");
  console.log("HS2_PROOF_01e0eefa133a41478810e6c6b737c5ef=" + proof);
}
