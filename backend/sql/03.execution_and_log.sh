#!/bin/bash
# 02.initialize.sqlを再起動時にもう一度実行されない様にする。&& 実行ファイルを残す

dump_sql='/docker-entrypoint-initdb.d/02.initialize.sql'


if [ -e $dump_sql ]; then
  mysql -u root -p$DB_PASS < $dump_sql
  mv $dump_sql $dump_sql.log
else
  echo '$dump_sql is not found.'
fi