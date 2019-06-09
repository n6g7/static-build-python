const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { download } = require("@now/build-utils");
const static = require("@now/static-build");

const build = async arg => {
  await download(arg.files, arg.workPath, arg.meta);
  await exec("pip3 install pipenv");
  await exec("pipenv install", { cwd: arg.workPath });

  return await static.build(arg);
};

module.exports = {
  ...static,
  build
};
