const util = require("util");
const exec = util.promisify(require("child_process").exec);
const static = require("@now/static-build");

const installPipPackage = package => exec(`pip3 install ${package}`);

const build = async arg => {
  if (arg.config && arg.config.packages) {
    for (let package of arg.config.packages) {
      console.log("installing", package);
      await installPipPackage(package);
    }
  }
  return await static.build(arg);
};

module.exports = {
  ...static,
  build
};
