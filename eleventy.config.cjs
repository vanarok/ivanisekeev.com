const clean = require("eleventy-plugin-clean");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(clean);

  eleventyConfig.addPassthroughCopy(
    process.env.PRODUCTION
      ? {
          "./node_modules/alpinejs/dist/cdn.min.js": "./js/alpine.js",
          "./node_modules/htmx.org/dist/htmx.min.js": "./js/htmx.js",
          "./src/shared/assets/vanilla.css": "./css/vanilla.css",
          "./src/shared/assets/favicon.png": "./favicon.png",
        }
      : {
          "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
          "./node_modules/htmx.org/dist/htmx.js": "./js/htmx.js",
          "./src/shared/assets/vanilla.css": "./css/vanilla.css",
          "./src/shared/assets/favicon.png": "./favicon.png",
        }
  );

  return {
    dir: {
      input: "src",
      includes: "widgets/includes",
      layouts: "widgets/layouts",
    },
  };
};
