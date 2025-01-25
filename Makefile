test:
	powershell -ExecutionPolicy Bypass -File ./test.ps1

migrate:
	powershell -ExecutionPolicy Bypass -File ./migrate.ps1
	
stop: 
	docker compose --profile live --profile test stop