const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
    extraNodeModules: {
      assets: path.resolve(__dirname, "assets"),
    },
  };

  return config;
})();
