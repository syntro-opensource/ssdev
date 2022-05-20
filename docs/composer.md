# Installing Composer Dependencies

> **Note**: if you use a different container than the default, these docs only
> apply if you have composer built-in

ssdev uses docker and by default hosts Silverstripe inside a container that comes
bundled with a composer binary.

This makes managing dependencies an easy task as you can rely on the platform
inside the container, which contains the default requirements of a Silverstripe
installation. You can also customize the used container in order to mirror
your production environment.

ssdev gives you the option to execute commands in your host container, which in
turn allows you to execute composer directly:

```
ssdev exec -- composer require syntro/silvershare
```

You can use composer as if it were natively on your system.
