const Card = require('./src/_includes/components/Card');


module.exports = function(eleventyConfig) {

   
   eleventyConfig.addPassthroughCopy("src/assests");
   eleventyConfig.addPassthroughCopy("src/css/");

   eleventyConfig.addWatchTarget("src/css");

   eleventyConfig.addShortcode("Card", Card);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site', 
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk', 
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}