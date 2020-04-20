const CURRENT_ENV = 'production';

const ENV = {
  development: {
    BASE_URL: 'http://localhost:3000/',
    ASSETS_URL: '_nuxt/assets/'
  },
  production: {
    BASE_URL: 'https://web3dgraff.herokuapp.com/',
    ASSETS_URL: `~assets/`
  }
};

export { ENV, CURRENT_ENV };