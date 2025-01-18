test:
	powershell -ExecutionPolicy Bypass -File ./test.ps1

stop: 
	docker compose stop