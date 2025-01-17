test:
	docker compose --profile test up -d
	npm test
	stop

stop: 
	docker compose stop