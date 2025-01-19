write-Host "Running migrations.." -ForegroundColor Yellow
docker compose --profile test up -d
$ready = $false 
while( -not $ready )
{
    docker exec
}
# && dotenvx run -f .env.test -- npx sequelize-cli db:migrate && docker compose down"
