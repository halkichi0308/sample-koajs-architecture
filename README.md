# sample

## このリポジトリで紹介したいもの(ざっくり) ##
* ライブラリ/ツールの入れ替えを容易にしたい
* クリーンな環境かつ、開発環境に依存しない構成
  ->どのOSでも同じ挙動になる、そのままデプロイできる
* モダン


## Usage ##
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

## architecture ##
```
├── backend
│   ├── Dockerfile          # backendのコンテナ用のDockerファイル
│   ├── api                 # ここの配下がkoajsコンテナに渡される
│   │   ├── dist            # typescriptの宛先 この配下は勝手につくられるので触らない
│   │   │   ├── app
│   │   │   ├── controllers
│   │   │   ├── lib
│   │   │   ├── routes
│   │   │   └── user
│   │   ├── node_modules　　# 開発時はホストOSのnode_modulesをコンテナに渡す
│   │   ├── package.json
│   │   ├── src            # backendのソースファイル
│   │   │   ├── app
│   │   │   ├── controllers
│   │   │   ├── lib        # ライブラリ群
│   │   │   ├── routes
│   │   │   └── user       # ユーザにまつわるソース
│   │   ├── test
│   │   │   ├── example.js # testのサンプル
│   │   │   └── http       # 機能単位でディレクトリ分ける 
│   │   ├── tsconfig.json  # typescriptの設定ファイル
│   │   └── yarn.lock
│   └── sql                # sqlの初期データ投入ファイル群(migration的な)
│       ├── init.sh        # sql/配下のディレクトリはsqlコンテナでしか利用しない
│       └── seed.sql
├── docker-compose.yml
└── frontend               # frontendのコンテナ用(まだ未着手;;)
    ├── Dockerfile
    └── packege.json
```

## Remarks ##
* `yarn add`はコンテナの中で実施する。
* `yarn test --watch` テストが便利
* 


## この構成で考えられていないもの ##
* frontendのアーキテクチャ
* DB設計
* ロギング
* セキュリティ(あとで)