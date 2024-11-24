# Using `ssdev` on macOS

In order to use ssdev efficiently, you need to install the following:
* Docker ([installation instructions](https://www.docker.com/products/docker-desktop))
* Node & npm *(& npx)* ([installation instructions](https://nodejs.org/en/download/))

After installing the prerequisites, you can follow up with installation of ssdev.

## NFS on macOS
> **Note:** with newer versions of Docker for desktop, the default driver for bind mounts
> has gotten very performant. This means, that you will most likely not be needing NFS-mounts
> anymore. We recommend to check performance before setting up NFS


In order to share files to the container and keep a speedy environment,
we use an nfs mount instead of the native filesystem mount.

For this to work, you have to give the necessary permissions to docker desktop.

### Configuring NFS Exports

Add the following to your `/etc/exports`:

```
/System/Volumes/Data -alldirs -mapall=501:20 localhost
```

and add the following to `/etc/nfs.conf`:

```
nfs.server.mount.require_resv_port = 0
```

### Add Permissions

In order for Docker and NFS to work, you have to open Settings > Security
and give access to the desired directories (or full disk access) to `Docker`
and `nfsd`
