const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  images: {
    includePaths: [path.join(__dirname, '..')],
    domains: ['cdn-profiles.tunein.com', 'cdn-radiotime-logos.tunein.com'],
  },
};
