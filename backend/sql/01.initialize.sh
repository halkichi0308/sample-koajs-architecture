#!/bin/bash
# Usage: backend/sql/* 配下にある.sqlのファイルを連結する。
# dockerのmysql公式コンテナがdocker-entrypoint-initdb.d直下の.sqlファイルをinitしてくれるため

dump_sql='/docker-entrypoint-initdb.d/02.initialize.sql'

if [ -e $dump_sql ]; then
  echo "$dump_sql exists."
else
  echo "create database $DB_NAME;" >> $dump_sql
  echo "use $DB_NAME;" >> $dump_sql

  for file in $(find /docker-entrypoint-initdb.d/ -name '*.sql'|sort)
  do
    if ! [[ $file =~ initialize\.sql ]]; then
      echo  "-- $file" | sed -e 's/\docker-entrypoint-initdb.d\///' >> $dump_sql
      cat $file >> $dump_sql 
    fi
  done
fi

