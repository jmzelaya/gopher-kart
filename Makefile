build:
	@docker build -t jmzelaya/racing-game .

run: build
	@docker run -p 8080:80 jmzelaya/racing-game

open:
	@open http://localhost:8080
