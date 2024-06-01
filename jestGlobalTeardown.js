module.exports = async function (globalConfig, projectConfig) {
  const curr = process.memoryUsage()
  console.log("rssDiff: " , curr.rss - global.__DEV__.rss);
  console.log("heapTotalDiff: " , curr.heapTotal - global.__DEV__.heapTotal);
  console.log("heapUsedDiff: " , curr.heapUsed - global.__DEV__.heapUsed);
  console.log("externalDiff: " , curr.external - global.__DEV__.external);
  console.log("arrayBuffersDiff: " , curr.arrayBuffers - global.__DEV__.arrayBuffers);
};