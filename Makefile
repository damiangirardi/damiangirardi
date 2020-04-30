.PHONY: help
.ONESHELL:

# For use of bash, to be able to "source" virtualenv's "activate" script
SHELL = /bin/bash

VIRTUALENV_DIR := .virtualenv

help:
	@echo "See the sources"

virtualenv-update:
	set -e
	test -d $(VIRTUALENV_DIR) || virtualenv -p python3.7 $(VIRTUALENV_DIR)
	source $(VIRTUALENV_DIR)/bin/activate
	pip install pip-tools

pip-compile-sync:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	pip-compile --output-file requirements-dev.txt requirements-dev.in
	pip-sync requirements-dev.txt

docker-compose-build:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	docker-compose --env-file /dev/null -f docker-compose.yml build

docker-compose-up:
	set -e
	source $(VIRTUALENV_DIR)/bin/activate
	docker-compose --env-file /dev/null -f docker-compose.yml up
