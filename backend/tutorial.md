___
# Koa.js tutorial #

___
## はじめに ##
koajsのためのtutorialです。

___
## 環境の構築 ##
koa.jsのセットアップをしますが、その前にクリーンな開発環境を構築するためにdockerを導入します。


このステップでやることはたったの3つだけです。

1. docker用のディレクトリを作成する。
```
$ mkdir -p koajs/api/app
$ cd koajs
```

2. 以下のファイルを `docker-compose.yml`という名前で作成します。これは`koajs`ディレクトリの中に置きます。
``` yml
version: '3'
services:
  koa:
    container_name: koa
    images: 
      - 'node:10-stretch'
    ports:
      - '3000:3000'
    volumes:
      - ./api:/opt/api
    workdir:
      - '/opt/api'
```

3. `docker-compose.yml`があるディレクトリで以下のコマンドを実行します。
``` sh
$ docker-compose up -d
...
Starting koa ... done 
```

クリーンな開発環境の構築が完了しました。

___
## 環境を利用する。 ##
作成した`dockerコンテナ`の中に入るには以下のコマンドを実行します。
``` sh
$ docker-compose exec koa bash
```
コンソールが以下の様になればコンテナにアクセスできています。
``` sh
root@d1218e5952b1:api$
```
以降はコンテナの中でkoaのtutorialを進めていきます。

___
### koajs をインストールする ###
コンソールで以下のコマンドを実行します。
``` sh
$ yarn init
```
プロジェクトの設定を尋ねられるのでひとまず名前は`app`に設定し、その他はenterを押下していくとdefautの設定が利用されます。
``` sh
$ yarn init
yarn init v1.13.0
question name (api): app
question version (1.0.0): 
question description: 
question entry point (index.js): 
question repository url: 
question author: 
question license (MIT): 
question private: 
success Saved package.json
Done in 32.93s.
$
```
続いて以下のコマンドを実行します。
```
$ yarn add koa koa-router
(これはパスを通しています)
$ export PATH=$PATH:/opt/api/node_modules/.bin
```
ここまで実施した後に、`api`配下のディレクトリが以下の様になると思います。
```
api/ (現在のディレクトリ)
  ├-app/
  ├-node_modules/
  ├-package.json
  └-yarn.lock
```
`app/index.js`というファイルを作成し、中身を以下の様に編集しましょう。  
``` js
var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello World!!';
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);

console.log('-server running-');
```

ここまで完了したらkoa.jsは動作するようになっています。コンソールで以下のコマンドを実行してください。
``` sh
$ node app/index.js
-server running-
```
`index.js`を実行させたのでブラウザで確認してみましょう。  
http://localhost:3000 にアクセスすると、koa.jsが動いていることが確認できます。

___
### 開発を楽にしていこう ###
koa.jsが実行できることは確認できたので、今度は`package.json`について触れてみることにします。  
この段階で`package.json`を開くと、以下の様になっているはずです。
``` json
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "koa": "^2.7.0",
    "koa-router": "^7.4.0"
  }
}
```
`package.json`は`node_modules`のversionや、アプリケーションで利用するコマンドなどを定義しておけるnodeを利用した開発に欠かせないファイルです。

`package.json`についての詳細は以下のページが詳しく取り扱っています。

[https://yarnpkg.com](https://yarnpkg.com/ja/docsc/package-json) 

今回のアプリケーションで扱う`json`ファイルに`"scripts"`を追加します。(`,`カンマの位置に気をつけてください。)
``` json
[package.json]
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "koa": "^2.7.0",
    "koa-router": "^7.4.0"
  },
  "scripts": {
    "start": "node app/index.js"
  }
}
```
この状態で、コンソールで以下のコマンドを実行してください。
``` sh
$ yarn start
```
続いて以下の様に表示され、先ほどjsonファイルで定義した`node app/index.js`がscriptとして定義できていることが確認できました。
```
yarn run v1.13.0
$ node app/index.js
-server running-
```
この`"scripts"`にはテストを書く際にも利用されるので覚えておきましょう。

___
### ルーティングする ###
koa-routerでは簡単にルーティングすることができます。
``` js
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });
```
`index.js`にもルーティングを追加してみましょう。
``` js
[index.js]
 4|  var app = new Koa();
 5|  var router = new Router();
 6| 
 7|  router.get('/', (ctx, next) => {
 8|   // ctx.router available
 9|   ctx.body = 'Hello World!!';
10|  });
11|  router.get('/users', (ctx, next)=>{
12|   ctx.body = 'This is /users page.';
13|  });
```
追加できたら、コンソールで以下のコマンドを実行します。
``` sh
$ yarn start
```
koa.jsが起動したのを確認したら、以下のURLへアクセスしてURLによるルーティングができていることを確認してください。  
http://localhost:3000/users

上記のURLの例では`localhost`の`3000`番ポートで待ち受けているサーバが、HTTPのリクエストを受け取った場合に`/users`のリソースでリクエストを処理できるようなリンクを作成しています。





RESTfulなAPIを使いたい場合には以下の様にもできます。
``` js
 4| var app = new Koa();
 5| var router = new Router();
 6| 
 7| router.get('/', (ctx, next) => {
 8|   // ctx.router available
 9|   ctx.body = 'Hello World!!';
10| });
11| router.get('/users', (ctx, next)=>{
12|   ctx.body = 'This is /user page.';
13| });
14| router.get('/users/:id', (ctx, next)=>{
15|   ctx.body = `thx! We got ${ctx.params.id}.`;
16| });
```
14行目に追加した`'/users/:id'`では、URLの値を入力として処理することができます。  
いかにアクセスすることで、`:id`として送信した値`12345`を利用できていることが確認できます。  
http://localhost:3000/users/12345

___
### ルーティングとHTTPの関係 ###
ルーティングについて少しだけ解説をすると、  
サーバが受け取ったリクエストをどのリソースで処理するか、ということを`router`では行なっています。

ブラウザから送信されるHTTPのリクエストにはRFCで定義されたHTTPメソッドが必ず付与され、それに応じてルーティングを振り分けることもできます。  
また、HTTPメソッドは言葉の通りそのHTTPリクエストの`ふるまい`を表しています。


主なメソッド|目的|例
:-:|:-:|:-:
GET|リソースの取得|http://example.com のページの内容を取得する
POST|データの送信|掲示板へのメッセージの投稿
PUT|データの保存|PUTは指定したリソースにデータを保存することを明示する
DELETE|リソースの削除|リソースを削除する事を要求

このメソッドとURIのルーティングに則って処理を行うAPIを`RESTful API`とも言います。

詳しくは[qiita](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2)へ

## DBと接続してみよう ##
続いて、アプリケーションに欠かせないDB(データベース)との接続について解説していきます。  
多くのフレームワークの場合、いくつかの設定ファイルを利用するだけでDBとの接続を構築できます。このチュートリアルではさらに簡単に実施できることを約束します。

たった2つのアクションを実行するだけです。

1. 以下の