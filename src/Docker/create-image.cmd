docker build --no-cache -f SQL\Dockerfile.PostgreSql -t primerr/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t primerr/app ../..
