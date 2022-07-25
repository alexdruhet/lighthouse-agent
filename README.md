# Lighthouse Agent

A quality inspection service.

## Prerequisite

* `nodejs` >= 16
* `yarn` >= 1.22.15
* `docker` >= 18

## Local installation

### Set DB config

Open a terminal, change directory to this repository root, then copy the `.env.dist` file to a new `.env` file:

```bash
cp .env.dis .env
```

Open the `.env` file and set database parameters. Note that you can use `localhost` as `$PGHOST` with the provided docker compose config.

### Start server

```bash
yarn run start
```

## API

See https://github.com/spotify/lighthouse-audit-service#api.

## Built With
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Lighthouse is an open-source, automated tool for improving the quality of web pages.
* [Lighthouse Audit Service](https://github.com/spotify/lighthouse-audit-service) - A service meant to help you run, schedule, store, and monitor Lighthouse reports over time.

## Authors and acknowledgment
* **Paul Marbach @ Spotify** - *Initial work* - [Lighthouse Audit Service](https://github.com/spotify/lighthouse-audit-service)
* **Alex Druhet** - *This implementation* - [Listo Studio](https://listo.studio)