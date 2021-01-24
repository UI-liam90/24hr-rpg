module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/style.css");

  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  
  eleventyConfig.addPassthroughCopy("img");
  
  eleventyConfig.addPassthroughCopy("manifest.json");


  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });
};