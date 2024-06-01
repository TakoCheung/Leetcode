module.exports = async function (globalConfig, projectConfig) {
  global.__DEV__ = process.memoryUsage()
  console.log(global.__DEV__)
};