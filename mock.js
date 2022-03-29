const { mock } = require("intermock");
const fs = require("fs");

const content = fs.readFileSync("./src/models/user.ts", "utf-8");

const result = mock({
  files: [["", content]],
  interfaces: ["User"],
  output: "object",
});

console.log(result);
