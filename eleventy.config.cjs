const clean = require('eleventy-plugin-clean')
const pluginWebc = require('@11ty/eleventy-plugin-webc')
const {eleventyImagePlugin} = require("@11ty/eleventy-img");
const {EleventyI18nPlugin} = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(clean)
    // WebC plugin
    eleventyConfig.addPlugin(pluginWebc, {
        components: [
            // Add as a global WebC components
            "src/_components/**/*.webc",
            "src/_includes/pages/**/*.webc",
            "npm:@11ty/eleventy-img/*.webc",
        ]
    })

    // Copy static assets to public
    eleventyConfig.addPassthroughCopy('src/assets')
    eleventyConfig.addPassthroughCopy("src/admin");


    // Image plugin
    eleventyConfig.addPlugin(eleventyImagePlugin, {
        // Set global default options
        formats: ["webp", "jpg"],
        urlPath: "/img/",
        widths: [50, 100, 200, 300, 600, 1200, 'auto'],

        // Notably `outputDir` is resolved automatically
        // to the project output directory

        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
        },
    });


    /**======================================================================
     FILTERS - Modify data in template files at build time
     ========================================================================*/
    /** https://www.11ty.dev/docs/filters/ */

    /**
     *  Converts dates from JSDate format (Fri Dec 02 18:00:00 GMT-0600) to a locale format.
     *  Use - {{ "DATE GOES HERE" | postDate }}
     *  https://moment.github.io/luxon/api-docs/index.html#datetime
     */
    eleventyConfig.addFilter("postDate", require("./src/config/postDate"));
    /**=====================================================================
     END FILTERS
     =======================================================================*/
    // i18n
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        // any valid BCP 47-compatible language tag is supported
        defaultLanguage: "en",

        filters: {
            // transform a URL with the current page’s locale code
            url: "locale_url",

            // find the other localized content for a specific input file
            links: "locale_links",
        },

        errorMode: 'allow-fallback'
    });

    /**
     *  AUTOMATIC SITEMAP GENERATION 
     *  Automatically generate a sitemap, using the domain in _data/client.json
     *  https://www.npmjs.com/package/@quasibit/eleventy-plugin-sitemap
     */
    eleventyConfig.addPlugin(pluginSitemap, {
              sitemap: {
                  hostname: "https://ivanisekeev.com"
              },
    });

    eleventyConfig.addFilter("getArticleLocale", require("./src/config/getArticleLocale"));

    eleventyConfig.addPlugin(syntaxHighlight);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'dist',
            data: '_data'
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    }
}
