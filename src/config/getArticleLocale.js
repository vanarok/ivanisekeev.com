module.exports = function (article) {
    return article.page.filePathStem.split('/')[3]
}
