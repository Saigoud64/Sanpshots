// webpack.config.js

module.exports = {
    // Other webpack configurations...
  
    resolve: {
      fallback: {
        "assert": require.resolve("assert"),
        "url": require.resolve("url")
      }
    }
  };

  