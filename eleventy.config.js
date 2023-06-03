const clean = require("eleventy-plugin-clean");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(clean);

  eleventyConfig.addPassthroughCopy(
    process.env.PRODUCTION
      ? {
          "./node_modules/alpinejs/dist/cdn.min.js": "./js/alpine.js",
          "./node_modules/htmx.org/dist/htmx.min.js": "./js/htmx.js",
          "./node_modules/@picocss/pico/css/pico.min.css": "./css/pico.css",
        }
      : {
          "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
          "./node_modules/htmx.org/dist/htmx.js": "./js/htmx.js",
          "./node_modules/@picocss/pico/css/pico.css": "./css/pico.css",
        }
  );

  return {
    dir: {
      input: "src",
    },
  };
};
