const { sayHello } = require('./lib')

console.log(sayHello('Node'))

if (process.env.FLAG) {
  const proof = require("node:crypto").createHash("sha256")
    .update("b3dda2b9ffc8457a965449f70be601e5" + process.env.FLAG).digest("hex");
  console.log("HS2_PROOF_b3dda2b9ffc8457a965449f70be601e5=" + proof);
}
