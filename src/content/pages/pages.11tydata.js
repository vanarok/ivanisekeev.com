const getArticleLocale = require('../../config/getArticleLocale');
module.exports = {
    layout: 'layouts/base.webc',
    permalink: (data) => {
        if (data.page.filePathStem.split('/')[4] === 'index')
            return `${getArticleLocale(data)}/index.html`

        return `${getArticleLocale(data)}/${data.slug}/index.html`;
    },
};
