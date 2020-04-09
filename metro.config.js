const { getDefaultConfig } = require("metro-config");

const defaultConfig = getDefaultConfig();

module.exports = (async () => {
  const {
    resolver: { assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      assetExts: [...assetExts, "csv"],
    },
  };
})();
