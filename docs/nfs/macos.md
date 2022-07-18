# Configuring NFS on macOS

In order to share files to the container and keep a speedy environment,
we use an nfs mount instead of the native filesystem mount.

For this to work, you have to give the necessary permissions to docker desktop.

## Configuring NFS Exports

Add the following to your `/etc/exports`:

```
/System/Volumes/Data -alldirs -mapall=501:20 localhost
```

and add the following to `/etc/nfs.conf`:

```
nfs.server.mount.require_resv_port = 0
```

## Add Permissions

In order for Docker and NFS to work, you have to open Settings > Security
and give access to the desired directories (or full disk access) to `Docker`
and `nfsd`
