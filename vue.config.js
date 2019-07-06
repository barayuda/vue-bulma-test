module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/main.scss";
        `
      }
    }
  },

  assetsDir: "assets",

  pwa: {
    name: "WEB IMPLEMENTATION",
    themeColor: "#108ee9",
    msTileColor: "#108ee9"
  },

  publicPath: '/webtask/'

};
