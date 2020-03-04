//postcss.config.js
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss('tailwindConfig.js'), require('autoprefixer')],
};
