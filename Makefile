.PHONY: help install dev build pages preview test lint clean

PACKAGE_MANAGER := $(shell if command -v bun >/dev/null 2>&1; then echo bun; else echo npm; fi)

help:
	@echo "Available targets:"
	@echo "  make install   Install dependencies"
	@echo "  make dev       Start the development server"
	@echo "  make build     Build the production bundle"
	@echo "  make pages     Build the GitHub Pages bundle"
	@echo "  make preview   Preview the production build"
	@echo "  make test      Run the test suite"
	@echo "  make lint      Run lint checks"
	@echo "  make clean     Remove installed dependencies"
	@echo ""
	@echo "Using package manager: $(PACKAGE_MANAGER)"

install:
ifeq ($(PACKAGE_MANAGER),bun)
	bun install
else
	npm install
endif

dev:
ifeq ($(PACKAGE_MANAGER),bun)
	bun run dev
else
	npm run dev
endif

build:
ifeq ($(PACKAGE_MANAGER),bun)
	bun run build
else
	npm run build
endif

pages: build

preview:
ifeq ($(PACKAGE_MANAGER),bun)
	bun run preview
else
	npm run preview
endif

test:
ifeq ($(PACKAGE_MANAGER),bun)
	bun run test
else
	npm run test
endif

lint:
ifeq ($(PACKAGE_MANAGER),bun)
	bun run lint
else
	npm run lint
endif

clean:
	rm -rf node_modules
