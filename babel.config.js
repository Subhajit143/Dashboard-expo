module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // এখানে অন্যান্য plugin থাকলে আগে আসবে
      "react-native-reanimated/plugin", // সবশেষে রাখতে হবে
    ],
  };
};
