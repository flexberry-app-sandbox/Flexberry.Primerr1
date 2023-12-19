docker build --no-cache -f SQL\Dockerfile.PostgreSql -t primerr-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t primerr-java/app ../../..
