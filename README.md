# sample

```
$ docker-compose up -d 
```

``` bash
$ docker-compose ps
  Name               Command             State            Ports         
------------------------------------------------------------------------
backend    node                          Up      0.0.0.0:18081->3000/tcp
frontend   node                          Up      0.0.0.0:18080->3000/tcp
mysql      docker-entrypoint.sh mysqld   Up      0.0.0.0:3306->3306/tcp 
```
