const slugify = require("slugify");
const getArticleLocale = require("../../config/getArticleLocale");

module.exports = {
  tags: "articles",
  layout: "layouts/base.webc",
  preloadImg: "{{ image }}",
  permalink: (data) => {
    if (!data.title) return false;
    return `/${getArticleLocale(data)}/blog/${slugify(data.title)}/index.html`;
  },
  eleventyComputed: {
    template: "article-page",
    sitemap: (data) => {
      return {
        links: [
          {
            url: `/${getArticleLocale(data)}/blog/${slugify(data.title)}/index.html`,
            lang: getArticleLocale(data),
          },
        ],
      };
    },
  },
};
