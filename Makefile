build:
	@docker build -t quay.io/ardanlabs/ardan-labs-racing-game .

run: build
	@docker run -p 8080:80 quay.io/ardanlabs/ardan-labs-racing-game

push: build
	@docker push quay.io/ardanlabs/ardan-labs-racing-game

open:
	@open http://localhost:8080
