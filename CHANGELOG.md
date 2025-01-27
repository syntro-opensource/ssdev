<a name="unreleased"></a>
## [Unreleased]


<a name="2.1.0"></a>
## [2.1.0] - 2025-01-27
### 🍰 Added
- Documentation for Windows

### 🐞 Fixed
- Passwort authentication plugin ([#189](https://github.com/syntro-opensource/ssdev/issues/189))


<a name="2.0.0"></a>
## [2.0.0] - 2024-08-05
### 🔧 Changed
- switched to compose v2 compatibility

### 🧬 Dependencies
- Bump docker-compose from 0.24.1 to 0.24.8 ([#168](https://github.com/syntro-opensource/ssdev/issues/168))

### BREAKING CHANGE

does only work with compose v2


<a name="1.4.0"></a>
## [1.4.0] - 2024-08-05
### 🧬 Dependencies
- Bump docker-compose from 0.23.19 to 0.24.1 ([#162](https://github.com/syntro-opensource/ssdev/issues/162))


<a name="1.3.0"></a>
## [1.3.0] - 2023-03-03
### 🍰 Added
- Dependabot now manages github actions
- description on how to enable NFS on macOS

### 🔧 Changed
- Updated Node.js version in actions to 18

### 🗑 Removed
- NFS is not enabled by default

### 🧬 Dependencies
- Bump jest from 28.1.3 to 29.4.3 ([#147](https://github.com/syntro-opensource/ssdev/issues/147))
- Bump yargs from 17.5.1 to 17.7.1 ([#149](https://github.com/syntro-opensource/ssdev/issues/149))
- Bump eslint from 8.20.0 to 8.35.0 ([#150](https://github.com/syntro-opensource/ssdev/issues/150))
- Bump actions/checkout from 2 to 3 ([#151](https://github.com/syntro-opensource/ssdev/issues/151))
- Bump docker-compose from 0.23.17 to 0.23.19 ([#152](https://github.com/syntro-opensource/ssdev/issues/152))
- Bump yaml from 2.1.1 to 2.2.1 ([#139](https://github.com/syntro-opensource/ssdev/issues/139))
- Bump [@syntro](https://github.com/syntro)-opensource/eslint-config-base from 1.1.0 to 1.1.2 ([#117](https://github.com/syntro-opensource/ssdev/issues/117))
- Bump jest from 28.1.2 to 28.1.3 ([#106](https://github.com/syntro-opensource/ssdev/issues/106))
- Bump eslint from 8.18.0 to 8.20.0 ([#107](https://github.com/syntro-opensource/ssdev/issues/107))


<a name="1.2.3"></a>
## [1.2.3] - 2022-06-30
### 🔧 Changed
- uses oracle image for mysql by default

### 🧬 Dependencies
- Bump [@syntro](https://github.com/syntro)-opensource/eslint-config-base from 1.0.2 to 1.1.0 ([#99](https://github.com/syntro-opensource/ssdev/issues/99))
- Bump eslint from 8.16.0 to 8.18.0 ([#102](https://github.com/syntro-opensource/ssdev/issues/102))
- Bump yaml from 2.1.0 to 2.1.1 ([#98](https://github.com/syntro-opensource/ssdev/issues/98))
- Bump jest from 28.1.0 to 28.1.2 ([#104](https://github.com/syntro-opensource/ssdev/issues/104))
- Bump eslint from 8.15.0 to 8.16.0 ([#96](https://github.com/syntro-opensource/ssdev/issues/96))


<a name="1.2.2"></a>
## [1.2.2] - 2022-05-20
### 🐞 Fixed
- supress error message

### 🔧 Changed
- allow dev stability for `init`


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


[Unreleased]: https://github.com/syntro-opensource/ssdev/compare/2.1.0...HEAD
[2.1.0]: https://github.com/syntro-opensource/ssdev/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/syntro-opensource/ssdev/compare/1.4.0...2.0.0
[1.4.0]: https://github.com/syntro-opensource/ssdev/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/syntro-opensource/ssdev/compare/1.2.3...1.3.0
[1.2.3]: https://github.com/syntro-opensource/ssdev/compare/1.2.2...1.2.3
[1.2.2]: https://github.com/syntro-opensource/ssdev/compare/1.2.1...1.2.2
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
