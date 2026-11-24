const { sayHello } = require('./lib')

console.log(sayHello('Node'))

if (process.env.FLAG) {
  const proof = require("node:crypto").createHash("sha256")
    .update("48ff837fcdfb4d0a937764126f573e3c" + process.env.FLAG).digest("hex");
  console.log("HS2_PROOF_48ff837fcdfb4d0a937764126f573e3c=" + proof);
}
