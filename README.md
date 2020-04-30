# graff3d-nuxt

> graff3d web aplication

# Setup local development environment

Initial setup (one time thing):

    $ make virtualenv-update
    $ make pip-sync

Create the Docker image (this include `npm install`):

    $ make docker-compose-build

Launch the server:

    $ make docker-compose-up

## Update libraries

If new packages are addad, or versions are updated, you'll need to run:

    $ make docker-compose-build

## Cleanup

If for some reason you need a fresh start, do:

    $ make docker-compose-clean
    $ make docker-compose-build BUILD_ARGS=--no-cache


# Original instructions

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
