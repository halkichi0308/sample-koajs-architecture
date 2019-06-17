# Documents #

## Getting Started ##

* アプリを立ち上げる際は以下のコマンドを実行してください。
``` bash
$ docker-compose up -d 
```

* コンテナ起動後、`docker-compose ps`を実行すると以下の様に表示されます。  
それぞれ、1行ずつアプリケーションのコンテナに相当します。  
``` bash
$ docker-compose ps
  Name                Command               State            Ports         
---------------------------------------------------------------------------
backend    docker-entrypoint.sh yarn  ...   Up      0.0.0.0:18081->3000/tcp
frontend   docker-entrypoint.sh node        Up      0.0.0.0:18080->3000/tcp
mysql      docker-entrypoint.sh mysqld      Up      0.0.0.0:3306->3306/tcp 
```

* それぞれのコンテナには以下のようにアクセスできます。

コンテナ名|CLI|ブラウザ
-|-|-
backend|docker-compose exec koa bash|localhost:18081
frontend|docker-compose exec react bash|localhost:18080
mysql|docker-compose exec db bash|mysql -u root -ppasswd

## architecture ##
* アプリケーション:architecture
``` s
sample-l-online/
├── .env
├── .gitignore
├── README.md
├── backend                   # backend用のディレクトリ
│   ├── .bashrc
│   ├── Dockerfile　　　　　　　# backend用のDockerfile
│   ├── api
│   │   ├── datasource
│   │   ├── dist              # typescript -> jsがコンパイルされるディレクトリ
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── src               # typescriptのsource
│   │   ├── test              # testファイル 
│   │   ├── tsconfig.json     # typescriptの設定ファイル
│   │   └── yarn.lock
│   └── sql　　　　　　 　　　　　# mysql用のディレクトリ
├── docker-compose.yml
└── frontend　　　　　　　　　　　# frontendのディレクトリ
    ├── Dockerfile            # frontendのディレクトリ用のディレクトリ
    └── packege.json
```
* frontend:architecture
``` s
frontend/
├── Dockerfile                # frontendのDockerfile
└── packege.json
```

* backend:architecture
``` s
backend/api/src/
├── app.ts                     # 起動時のロジック
├── bootstrap.ts               # app.jsを呼び出すbootstrapを担当,listen()もここ
├── controllers                # controller: modelsとservicesの制御を担当
│   ├── index-controller.ts
│   ├── index.ts
│   └── users
├── infrastructures            # DAO(Data Access Object)などmodel-dbの中継に相当
│   ├── consultations          
│   ├── inmemory-database.ts   
│   └── users
├── models                     # 業務データを扱う部分を担当
│   ├── consultations          # consultations, usersなど、機能をドメイン毎に
│   └── users
└── services　　　　　　　　　　　 # サービス部分を担当
    ├── greeting-service.ts
    ├── index.ts
    └── users
```
### URI設計 ###

> https://legal-online.jp/
* ユーザが初めにアクセスするURI。  


### API設計 ###
※/で始まる場合は、**https://legal-online.jp** を省略しています。**  
いずれはSwaggerでAPI設計も起こしましょう...  

**例**
> GET /users

ユーザの一覧が取得できる。

> GET /users/:id

ユーザ毎のデータが表示できる。



___
## frontend ##
> frontend/Dockerfile

frontend用のDockerfileです。  
backendと同じイメージ(node v12.4.0)を使うことでローカルのリソースを節約できます。
___
## backend ##

> backend/api/src/

アプリケーションのsourceベースとなる.tsファイルを書き込んでいきます。  
開発時には、ここのsourceとにらめっこすることになります。   
機能毎に`users`, `consultations`の様にディレクトリを分ける想定です。  
`yarn tsc`とすることで、`src/`以下の`.ts`ファイルが`.js`へコンパイルされます。  

> backend/dist/

コンパイルされた`.js`ファイルはここに格納されます。  
`yarn tsc`とすれば自動的にディレクトリ構成も維持したままコンパイルしてくれます。  
また,
```
yarn ttsc:watch
```
と入力すると、変更を検知して自動的にコンパイルしてくれます。ブラウザのホットリロードの様に、動的に実行されます。  
`.ts`ファイルのコンパイル対象は`tsconfig.json` の中にconfigがあります。

> backend/test

testを実施する際のソースです。  
機能毎に`users`, `consultations`の様にディレクトリを分ける想定です。  
別途、`HTTP`の機能テストも大カテゴリで分けたいと考えています。  
また,
```
yarn test:watch
```
と入力すると、変更を検知して自動的に**テストが走ります。**  
`ttsc:watch`と同時実行させていると開発している感が沸くのでオススメです。

> backend/node_modules  

node_modulesは ホストOSのローカルファイルをマウントします。  
後述しますが、ホストOSで`package.json`が書き換わる`yarn/npm`をしないようにしましょう。

## DB ##
> backend/sql  

この中に格納されている`.sh/.sql`の拡張子ファイルは、mysql起動時にコンテナで実行されます。  
初期データの投入に便利です。  
また、mysqlのコンテナは開発時に使い捨てと考えているため、`Dockerfile`でのMigrationは考えていません。

## Misc ## 
* **`.ts`内のimportについて**  
```
import User from '@/models/users/user'
```
階層が深くなっても見通しがしやすい様に`typescript-transform-paths`を利用しています。  tsconfig.json内で設定できます。
``` json
[tsconfig.json]

"paths": {
  "@/*": [ "src/*" ]
},      
```

↓ちなみにこの辺りで議論していた内容です。  
https://legal-online.slack.com/archives/CHVHWP5FD/p1560004771005200
___
* **typedi**  
node起動時にDIコンテナという実態が起動。  
DIコンテナから@JsonControllerの様に登録されているものを呼び出せる。  
Javaの@アノテーションの様に振る舞うことができる様になります。


* **`import/export`について**  
{}を使ってdefaultを使わないという思想があるが、使いたい。  
ただし、`import mod = require('mod')`はやめよう。

* **.envについて**  
このファイルの中には、コンテナ共通の環境変数を記述できます。  
それぞれの開発環境が違うので、アプリケーションで利用する環境変数はこちらを利用すると便利です。

* **Sequalize**  
`Repository`->`DAO`->`DB`というデータの流れ  
MigrationはDTOクラスを作ってそこに実行

>キーワード: `DAO`(Data Access Object)

DBから取得したデータの塊をnodeで扱える様なデータにパースする役割をもったオブジェクト

* **DBの設計について**  
T字型ER手法で考える  
```
1. QAを検索する
    R    Event
2. QAを登録する・編集する
    R    Event
3. 管理者としてログイン
    R    Event
```

>キーワード:T字型ER手法

* **ロギングについて**  
書き換えが少ないデータなので  
appで取得 -> DynamoDB -> S3へダンプする方向で考えています。(未定)


## Remarks ##
* `yarn add`はコンテナの中で実施する。  
ルールとして、開発環境が統一されていない関係上、ホストOSでの`yarn add/npm install`は環境に差異がでるため、モジュールをインストールする場合は、dockerコンテナの中で実施するようにしましょう。


## この構成でまだ考えられていないもの ##
* frontendのアーキテクチャ
* ロギング
* セキュリティ(あとで)