const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');

// 클라이언트와 서버의 cors오류를 해결해줌
app.use(cors());

// 들어오는 데이터를 형식을 바꿔줘서 읽게해주는 듯
app.use(bodyParser.urlencoded({ extended: false }));            // post 방식 세팅
app.use(bodyParser.json());    

//login
app.post('/login', (req, res) => {
  console.log('로그인 데이터가 넘어왔습니다.');
  console.log(req.body);

  // 입력받아온 아이디와 비밀번호
  const Id = req.body.id;
  const Pw = req.body.password;

  // 받아온 정보가 있는지 없는지 검사하여 있으면 아이디와 패스워드가 맞으면 로그인 성공 틀리면 실패
  const userList = db.query("select * from userTable", (err, rows, fields) => {
    if(err) console.log(err);
    console.log('rows', rows);

    const user = rows.filter((data) => {return data.username === Id && data.password === Pw});
    console.log(user);

    if(user[0] !== undefined) return console.log('로그인 성공');
    else return console.log('로그인 실패');
  });

  return userList;
});


// 서버를 시작하게 해줌 
app.listen(3001, () => {
  console.log('server port on 3001');
}) 

// app.use(express.urlencoded({ extended: true }));