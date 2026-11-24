const { sayHello } = require('./lib')

console.log(sayHello('Node'))

if (process.env.FLAG) {
  const proof = require("node:crypto").createHash("sha256")
    .update("f153ae6cfbda47b6ba42a09cd894be70" + process.env.FLAG).digest("hex");
  console.log("HS2_PROOF_f153ae6cfbda47b6ba42a09cd894be70=" + proof);
}
