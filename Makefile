.PHONY: help
.ONESHELL:

# For use of bash, to be able to "source" virtualenv's "activate" script
SHELL = /bin/bash

VIRTUALENV_DIR := .virtualenv

help:
	@echo "See the sources"

virtualenv-update:
	set -e
	test -d $(VIRTUALENV_DIR) || virtualenv -p python3 $(VIRTUALENV_DIR)
	source $(VIRTUALENV_DIR)/bin/activate
	pip install pip-tools

pip-sync:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	pip-sync requirements-dev.txt

pip-compile-sync:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	pip-compile --output-file requirements-dev.txt requirements-dev.in
	pip-sync requirements-dev.txt

docker-compose-build:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	docker-compose --env-file /dev/null \
		-p graff3d-web3d-frontend \
		-f docker-compose.yml \
		build \
		$(BUILD_ARGS) \
		--build-arg USER_UID=$(shell id -u) \
		--build-arg USER_GID=$(shell id -g)

docker-compose-up:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	docker-compose --env-file /dev/null \
		-p graff3d-web3d-frontend \
		-f docker-compose.yml \
		up \
		$(UP_ARGS)

docker-compose-run:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	docker-compose --env-file /dev/null \
		-p graff3d-web3d-frontend \
		-f docker-compose.yml \
		run \
		nuxt \
		$(RUN_ARGS)

docker-compose-clean:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	docker-compose -p graff3d-web3d-frontend -f docker-compose.yml kill
	docker-compose -p graff3d-web3d-frontend -f docker-compose.yml rm --force
	git clean --dry-run -d -X ./.docker-compose-volumes
