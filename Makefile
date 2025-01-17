test:
	docker compose --profile test up -d
	-npm test
	$(MAKE) stop

stop: 
	docker compose stop