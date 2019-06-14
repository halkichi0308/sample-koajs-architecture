import test from 'ava'
var req = require("request");

test('User情報が取得できているか', t =>{

  const option = {
    /* process.env.APP_NAME とすれば .envで定義したFQDNを取得できる*/
    url: "http://localhost:3000/users/all",
    qs: {
      testkey: "testvalue",
      hoge: "hoge"
    }
  };
  
  req.get(option, (error, response, body) => {
    console.log(body);
  })
  //t.deepEqual(body, [{"id":"234","name":"kkk"},{"id":"345","name":"ttt"},{"id":"456","name":"nnn"}])
  t.pass();
})
