module.exports = {
  eleventyComputed: {
    documentData: (data) => {
      return data;
    },
    permalink: (data) => {
      return `${( data.page.filePathStem.endsWith('/index') ? '' : '/{{ page.fileSlug }}')}/index.html`;
    },
  },
};