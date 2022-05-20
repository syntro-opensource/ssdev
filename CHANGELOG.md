<a name="unreleased"></a>
## [Unreleased]


<a name="1.2.1"></a>
## [1.2.1] - 2022-05-20
### 🐞 Fixed
- correctly state usage of `run` command in Helptext

### 🗑 Removed
- composer is no default service anymore


<a name="1.2.0"></a>
## [1.2.0] - 2022-05-20
### 🍰 Added
- Enable use of `ssdev up` which is closer to docker-compose
- Enable interactive sessions for `exec` and `run` via `stdio: 'inherit'` ([#93](https://github.com/syntro-opensource/ssdev/issues/93))
- `ssdev` config option for package.json files

### 🐞 Fixed
- fixed security auddit / alerts

### 🔧 Changed
- Improved documentation
- `init` command now uses our custom container, not requiring users to ignore platform reqs
- `init` command uses `syntro/ssto^2`
- added a custom prefix to dependabot PRs

### 🧬 Dependencies
- Bump eslint from 7.32.0 to 8.15.0 ([#92](https://github.com/syntro-opensource/ssdev/issues/92))


<a name="1.1.1"></a>
## [1.1.1] - 2021-09-28
### 🐞 Fixed
- lint

### 🔧 Changed
- init now relies on `config.platform` for composer

### 🧬 Dependencies
- jest from 26.6.3 to 27.2.1 ([#58](https://github.com/syntro-opensource/ssdev/issues/58))
- docker-compose from 0.23.5 to 0.23.13 ([#51](https://github.com/syntro-opensource/ssdev/issues/51))
- yaml from 1.10.0 to 1.10.2 ([#28](https://github.com/syntro-opensource/ssdev/issues/28))
- eslint from 7.14.0 to 7.32.0 ([#52](https://github.com/syntro-opensource/ssdev/issues/52))


<a name="1.1.0"></a>
## [1.1.0] - 2020-12-03
### 🍰 Added
- release scripting
- `build` command ([#15](https://github.com/syntro-opensource/ssdev/issues/15))

### 🔧 Changed
- specify total downloads in readme

### 🧬 Dependencies
- eslint from 7.13.0 to 7.14.0 ([#17](https://github.com/syntro-opensource/ssdev/issues/17))
- yargs from 16.1.0 to 16.1.1 ([#14](https://github.com/syntro-opensource/ssdev/issues/14))


<a name="1.0.3"></a>
## [1.0.3] - 2020-11-04
### 🐞 Fixed
- error is handled
- Database exposes port correctly


<a name="1.0.2"></a>
## [1.0.2] - 2020-11-02
### 🍰 Added
- Exec command ([#10](https://github.com/syntro-opensource/ssdev/issues/10))

### 🔧 Changed
- run now removes container again


<a name="1.0.1"></a>
## [1.0.1] - 2020-10-18
### 🍰 Added
- test definition to package.json

### 🐞 Fixed
- `config.composeOptions` is always defined


<a name="1.0.0"></a>
## [1.0.0] - 2020-10-17
### 🍰 Added
- jest and tests for os specific parts (more tests needed later) ([#4](https://github.com/syntro-opensource/ssdev/issues/4))
- more badges
- linting workflow ([#3](https://github.com/syntro-opensource/ssdev/issues/3))
- License

### 🔧 Changed
- readme now contains information
- improve command file structure


<a name="0.3.0"></a>
## [0.3.0] - 2020-10-15
### 🐞 Fixed
- native docker installations now correctly handle user 🎉 ([#1](https://github.com/syntro-opensource/ssdev/issues/1))


<a name="0.2.0"></a>
## [0.2.0] - 2020-10-15
### 🐞 Fixed
- correctly expose the `3306` port for database by default
- `init` now uses docker directly
- only publish on release publish

### 🔧 Changed
- `init` command: path isn't optional anymore
- `ssdev` now requires a command
- rename `exec` to `run` command


<a name="0.1.0"></a>
## 0.1.0 - 2020-10-14
### 🍰 Added
- initial release


[Unreleased]: https://github.com/syntro-opensource/ssdev/compare/1.2.1...HEAD
[1.2.1]: https://github.com/syntro-opensource/ssdev/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/syntro-opensource/ssdev/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/syntro-opensource/ssdev/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/syntro-opensource/ssdev/compare/1.0.3...1.1.0
[1.0.3]: https://github.com/syntro-opensource/ssdev/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/syntro-opensource/ssdev/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/syntro-opensource/ssdev/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/syntro-opensource/ssdev/compare/0.3.0...1.0.0
[0.3.0]: https://github.com/syntro-opensource/ssdev/compare/0.2.0...0.3.0
[0.2.0]: https://github.com/syntro-opensource/ssdev/compare/0.1.0...0.2.0
