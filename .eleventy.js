module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
    "./node_modules/htmx.org/dist/htmx.js": "./js/htmx.js",
    "./node_modules/@unocss/runtime/mini.global.js": "./js/unocss.js",
  });
};
