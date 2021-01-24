const rfs = require(`rfs`);
module.exports = {
  plugins: [
    //require(`tailwindcss`)(`./styles/tailwind.config.js`),
    require(`autoprefixer`),
    rfs({
      breakpoint: 1900,
    })
  ],
};