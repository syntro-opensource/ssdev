# Integrated Silverstripe development environment (ssdev)

[![npm](https://img.shields.io/npm/v/ssdev)](https://www.npmjs.com/package/ssdev)
[![npm](https://img.shields.io/npm/dm/ssdev)](https://www.npmjs.com/package/ssdev)
![NPM](https://img.shields.io/npm/l/ssdev)
[![Tests](https://github.com/syntro-opensource/ssdev/workflows/Tests/badge.svg)](https://github.com/syntro-opensource/ssdev/actions?query=workflow%3ATests)

Welcome to the repository of the `ssdev` tool!

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [What is `ssdev`?](#what-is-ssdev)
- [Get started](#get-started)
	- [1. Install requirements](#1-install-requirements)
	- [2. Use `ssdev`](#2-use-ssdev)
	- [3. install `ssdev` (optional)](#3-install-ssdev-optional)
- [Usage](#usage)
	- [Initialize a new project](#initialize-a-new-project)
	- [Serve & shut down an existing project](#serve-shut-down-an-existing-project)
	- [Install composer packages](#install-composer-packages)
- [FAQs](#faqs)
	- [Why not just use `docker-compose` directly?](#why-not-just-use-docker-compose-directly)

<!-- /TOC -->





## What is `ssdev`?
`ssdev` is the culmination of several attempts to simplify development of
Silverstripe-based websites or -applications. The primary goals were:

* Minimal requirements (-> no managing a complete LAMP VM on the developer PC)
* Maximal flexibility (-> enable dependencies like Elasticsearch out of the box)
* Maximal portability

Out of several implementations, `ssdev` was born. Please read this readme to get
started!
`ssdev` is a javascript based utility, which can be installed locally
or used anywhere with the [npx](https://github.com/npm/npx#readme) executor.

Behind the curtains, `ssdev` uses [Docker](https://www.docker.com/) to manage
the development environment.

## Get started
### 1. Install requirements
`ssdev` only needs two things to be installed on your machine:

* Docker | [installation instructions](https://www.docker.com/products/docker-desktop)
* Node & npm (& npx) | [installation instructions](https://nodejs.org/en/download/)

> Users on Mac or Windows will have to set up nfs. If it is not working
> out of the box, follow the steps in [this article](https://firehydrant.io/blog/nfs-with-docker-on-macos-catalina/).

### 2. Use `ssdev`
To start using ssdev, just type
```
npx ssdev
```
This will download the package and print a help message.

### 3. install `ssdev` (optional)
you can install `ssdev` globally by running
```
npm install -g ssdev
```
Make sure to keep the installation updated, as updates contain new features and bugfixes!

## Usage
If you have already printed the help message, you have already had a first idea
of how `ssdev` works. The following paragraphs present you with some input
about the usage and possibilities.

### Initialize a new project
To start with a new project, you can simply run
```
npx ssdev init ./my-project
```
which will install a new project in the `my-project` directory. By default,
the [`syntro/ssto`](https://github.com/syntro-opensource/silverstripe-ssto)
recipe is used, but you can also specify any other recipe using the
`-r <recipe>` flag.

### Serve & shut down an existing project
To serve an existing project, change to the root directory of the project
(where the `vendors` directory lies and the `composer.json` file is placed)
and run
```
npx ssdev serve
```

To shut down the environment, just type
```
npx ssdev down
```
Use the `-v` flag if you also want to remove the database for a fresh start
or if you want to remove the project from your local machine.

### Install composer packages
To install composer packages, you can run
```
npx ssdev run composer -- require your/package --ignore-platform-reqs
```
> Currently, the `--ignore-platform-reqs` flag is necessary, as the used
> image for serving Silverstripe does not contain composer and we had to
> fall back to the official composer image which lacks some dependencies.

## FAQs
### Why not just use `docker-compose` directly?
Because of portability. At the time of writing, there is no easy way to define
volumes on a per-system basis, which makes maintaining a set of files necessary
which in terms costs time.
