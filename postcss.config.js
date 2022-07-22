const rfs = require(`rfs`);
const postcssNested = require("postcss-nested");
const postcssCustomMedia = require("postcss-custom-media");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    //require(`tailwindcss`)(`./styles/tailwind.config.js`),
    postcssNested({}),
    postcssCustomMedia({}),
    rfs({
      breakpoint: 1900,
    }),
    autoprefixer({}),
  ],
};