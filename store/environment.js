const CURRENT_ENV = 'development';

const ENV = {
  development: {
    BASE_URL: 'http://localhost:3000/'
  },
  production: {
    BASE_URL: 'https://web3dgraff.herokuapp.com/'
  }
};

export { ENV, CURRENT_ENV };