module.exports = {
    reactScriptsVersion: "react-scripts",
    eslint: null,
    style: {
      css: {
        loaderOptions: () => {
          return {
            url: false,
          };
        },
      },
    },
  };