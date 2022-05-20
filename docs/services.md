# Adding Custom Services

As ssdev uses Docker under the hood, you can add more services if you need them.
You do this by adding a `docker-compose.yml` file to your project root. ssdev
will then merge this file over (!) the internal configuration.

As an example, this is how you add an [adminer](https://hub.docker.com/_/adminer) container:

```yml
# docker-compose.yml
version: "3.7"
services:
  adminer:
    image: adminer
    environment:
      ADMINER_DEFAULT_SERVER: database
    restart: always
    ports:
      - 8000:8888
  database:
    depends_on:
      - adminer

```
after you run `ssdev up`, an adminer service will be exposed on http://localhost:8000.

You can also add services like redis like this.
