const { mock } = require("intermock");
const fs = require("fs");
const path = require("path");

const createMockData = (file, interface) => {
  const content = fs.readFileSync(file, "utf-8");

  const result = mock({
    files: [["", content]],
    interfaces: [interface],
    output: "object",
    isOptionalAlwaysEnabled: true,
  });

  const keyValues = Object.entries(result[interface])
    .concat([])
    .map(([key, value], i) => {
      const insertSpace = i > 0 ? " ".repeat(4) : "";
      if (typeof value === "string") {
        return `${insertSpace}${key}: "${value}"`;
      } else {
        return `${insertSpace}${key}: ${value}`;
      }
    });

  return `{
    ${keyValues.join(",\n")}
  }`;
};

const getFileName = (filePath) => {
  return path.basename(filePath, ".ts");
};

module.exports = {
  prompt: async ({ prompter }) => {
    // TODO: 型情報の一覧をファイルから取得して選択できるようにしたい
    const questions = [
      {
        type: "input",
        name: "file",
        message: "which type file?",
      },
      {
        type: "list",
        name: "interfaces",
        message: "create interfaces",
      },
    ];

    const { file, interfaces } = await prompter.prompt(questions);
    return {
      file,
      interfaces,
      getFileName,
      createMockData,
    };
  },
};
