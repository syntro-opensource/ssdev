# ssdev - A Simple yet Powerful Silverstripe Development Environment Manager 🚀

[![npm](https://img.shields.io/npm/v/ssdev)](https://www.npmjs.com/package/ssdev)
[![npm](https://img.shields.io/npm/dt/ssdev)](https://www.npmjs.com/package/ssdev)
![NPM](https://img.shields.io/npm/l/ssdev)
[![Tests](https://github.com/syntro-opensource/ssdev/workflows/Tests/badge.svg)](https://github.com/syntro-opensource/ssdev/actions?query=workflow%3ATests)

ssdev makes Silverstripe development easy. Stop worrying about your LAMP, MAMP
or WAMP stack and start developing awesome websites and applications!

> 🚨 **WANTED: Feedback from Windows & Linux users!**
>
> ssdev is extensively tested and developed on macOS, as this is what we work on.
> To find bugs or problems on other systems, we need your feedback from using
> ssdev on Linux or Windows

## 🧩 Requirements
For ssdev to work correctly, you have to install
* Docker ([installation instructions](https://www.docker.com/products/docker-desktop)) - We recommend to install Docker desktop on Windows, as a native installation under wsl tends to not work correctly.
* Node & npm *(& npx)* ([installation instructions](https://nodejs.org/en/download/))

> Users on Mac and Windows will have to set up nfs.
>
> → see [📚 Configuring NFS on macOS](docs/nfs/macos.md).

## 📦 Installation
You can run ssdev without installing it using npx:
```
npx ssdev --help
```
This works great for checking out ssdev or for issuing some commands, but
for productive development work, you should install it globally using:

```
npm install -g ssdev
```
after which you can simply use it by typing
```
ssdev --help
```

## 🚀 Usage

ssdev assumes Silverstripe projects to be inside a directory containing a `composer.json`
file and a file structure [common for Silverstripe](https://docs.silverstripe.org/en/4/getting_started/directory_structure/).
All commands concerning that project **must** be executed in the project root.

If you want to experiment on a new project, have a look over at [`syntro/ssto`](https://github.com/syntro-opensource/silverstripe-ssto)
to get set up with a Silverstripe starter project.

In a directory containing a project, simply run
```
ssdev up
```
to bring up a server and database environment. To shut down the server after you
are finished, run
```
ssdev down
```
There is more to ssdev, but we go over all of it in the [docs](#-docs).

## 📖 Docs
ssdev is a powerful tool and can be customized in various ways. Read here how
you can achieve any setup, mimicking a production environment as closely as possible.


#### Config Options
You can set all config options (`ssdev --help`) in a `package.json` file under the
`ssdev` key. This allows you to set per-project settings that actually transfer
to other developers. An example would be if you want to use a different PHP version:
```json
{
  "ssdev": {
    "image-host": "syntrocontainer/silverstripe-dev:8.0-apache-buster"
  }
}
```

#### Configure the Host Container
→ see [📚 in-depth docs about how to work with diffrent hosting setups](docs/hostcontainer.md).

#### Install Dependencies
→ see [📚 in-depth docs about composer dependencies](docs/composer.md).

#### Executing Tests (PHPUnit, PHPStan, ...)
→ see [📚 in-depth docs about test execution](docs/testing.md).

#### Custom Services
→ see [📚 in-depth docs about custom service container](docs/services.md).

#### Using NFS Mount for Host Volume

On macOS or Windows, you may instruct ssdev to mount the host directory via NFS. In the past, this has worked
well for improving performance, but with the addition of new and faster file-sharing implementations,
this has become a legacy feature and has been disabled by default in version `1.3.0`.

If you want to re-enable it, simply add the `--use-nfs` flag or add the following to your config:
```json
{
  "ssdev": {
    "use-nfs": true
  }
}
```


→ see [📚 Configuring NFS on macOS](docs/nfs/macos.md).


## ➕ More Infos
Check out the following for more informations:
* [Changelog](CHANGELOG.md)
* [Contributing guide](CONTRIBUTING.md)
* [License](LICENSE.md)
* [`syntro/ssto`](https://github.com/syntro-opensource/silverstripe-ssto)
