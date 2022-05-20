# Executing Test Commands

> **Note**: if you use a different container than the default, the composer parts only
> apply if you have composer built-in

ssdev allows you to execute commands using the `exec` and `run` commands. For
for tests, we prefer the `run` command, as it executes the command in a fresh
container.

You can execute any test command like so:

```
ssdev run -- vendor/bin/phpunit
```

If your test-commands get longer (like the PHPStan one), you can use
composer to abbreviate the command:

```js
// composer.json
{
    //...
    "scripts": {
        "phpstan": "vendor/bin/phpstan analyse app/src --memory-limit=1G -c phpstan.neon -a vendor/syntro/silverstripe-phpstan/bootstrap.php --no-ansi --level 4",
    }
}

```
Then, simply use composer to execute the test:
```
ssdev run -- composer phpstan
```
