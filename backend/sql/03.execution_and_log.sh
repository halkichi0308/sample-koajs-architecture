#!/bin/bash
# 02.initialize.sqlを再起動時にもう一度実行されない様にする。&& 実行結果ファイルを残す
# 初めからinitialize.sqlを作っておくとDBが落ちた時、restartするとtable existとなりコケるため。

dump_sql='/docker-entrypoint-initdb.d/02.initialize.sql'


if [ -e $dump_sql ]; then
  mysql -u root -p$DB_PASS < $dump_sql
  mv $dump_sql $dump_sql.log
else
  echo '$dump_sql is not found.'
fi