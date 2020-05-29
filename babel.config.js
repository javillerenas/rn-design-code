module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["./src"],
          alias: {
            '@assets': './assets/',
            '@components': './src/components',
            '@views': './src/views',
            '@constants': './src/constants',
          }
        }
      ],
    ]
  };
};
