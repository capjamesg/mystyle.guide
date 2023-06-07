module.exports = function (eleventyConfig) {
    // copy the _redirects file
    eleventyConfig.addPassthroughCopy("_redirects");
}