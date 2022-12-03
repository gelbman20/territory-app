const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'interfaces': path.resolve(__dirname, 'src/interfaces'),
    },
  },
};
