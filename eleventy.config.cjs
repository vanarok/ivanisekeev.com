const clean = require("eleventy-plugin-clean");
const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(clean);

  eleventyConfig.addPlugin(pluginWebc);

  eleventyConfig.addPassthroughCopy(
    process.env.PRODUCTION
      ? {
          "./node_modules/alpinejs/dist/cdn.min.js": "./js/alpine.js",
          "./node_modules/htmx.org/dist/htmx.min.js": "./js/htmx.js",
        }
      : {
          "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
          "./node_modules/htmx.org/dist/htmx.js": "./js/htmx.js",
        }
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
