
run: dependencies
	@NODE_PATH=server ./bin/server.js

dependencies:
	@npm install

.PHONY: run 