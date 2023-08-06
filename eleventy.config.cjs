const clean = require('eleventy-plugin-clean')
const pluginWebc = require('@11ty/eleventy-plugin-webc')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(clean)
    eleventyConfig.addPlugin(pluginWebc)
    eleventyConfig.addPassthroughCopy('public')
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'dist',
        },
    }
}
