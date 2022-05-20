# Managing the Host Container

by default, ssdev uses the [syntrocontainer/silverstripe-dev:7.4-apache-buster](https://hub.docker.com/r/syntrocontainer/silverstripe-dev/tags)
container to serve your project.

If you have different requirements, you can influence the way your application
is served in two ways:

## Use a Prebuilt Custom Container
You can tell ssdev to use any container you like by supplying it with the `--image-host`
option:
```
ssdev --image-host your/container:1 up
```
Alternatively (and more conveniently), you can use the `ssdev` key in the root `package.json`
file:
```json
{
  "ssdev": {
    "image-host": "syntrocontainer/silverstripe-dev:8.0-apache-buster"
  }
}
```
You can add a `package.json` file even if you do not use any node stuff in your project 😉
> The same works with the `image-db` option for the database, allowing you to use
> a postgres db for example.

## Build your own Container
When there is no prebuilt container and you do not want to host one, you can
instruct ssdev to build the host via a custom `docker-compose.yml`. The values
in this file are merged **over** the internal definition, allowing you
to customize any aspect of any container.

As an example, if you want to build your host container from a `Dockerfile`
supplied in your project:

```yml
version: "3.7"
services:
  host:
    image: php-shib
    build:
      context: .
      target: target-step
    init: true
```

If you use `ssdev up` for the first time, the image should be automatically
built. If you have made changes to your `Dockerfile`, you can rebuild it using:
```
ssdev build
```

> This is a very powerful tool, allowing you to customize **any** aspect of your
> development environment while still sharing it with your colleagues.
