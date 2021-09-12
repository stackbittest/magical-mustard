// Per 11ty from scratch, we have to have a module.exports definition
module.exports = (eleventyConfig) => {
  // See if this helps with things that do not refresh
  module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
  };

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Pass things straight through from "src" to "dist"
  eleventyConfig.addPassthroughCopy("./src/static/");

  // Refresh stuff
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  // JSONify filter
  eleventyConfig.addShortcode("jsonify", function (text) {
    return JSON.stringify(text);
  });

  // getObjectSpread filter
  eleventyConfig.addFilter("getObjectSpread", function (obj) {
    return { ...obj };
  });

  // Get proper data into .11tydata.json files
  eleventyConfig.setDataDeepMerge(true);

  // Clarify which folder is for input and which folder is for output
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
