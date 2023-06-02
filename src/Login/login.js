import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const LoginBox = styled.section`
  width: 500px;
  height: 300px;
  border: 1px solid var(--boxColor);
  #idbox {
    outline: none;
  }
`;

const Login = () => {
  const [Id, setId] = useState('');
  const [PW, setPW] = useState('');

  const IdChange = (event) => {
    setId(event.target.value);
    console.log("id : " + Id);
  };
  const PwChange = (event) => {
    setPW(event.target.value);
    console.log("pw : " + PW);
  };
  const handleLogin = (id, pw) => {
    console.log(id + ', ' +  pw);
    axios.post('http://localhost:3001/login', {
      id : id,
      password : pw
    }).then((res)=>{ console.log(res)});
  }
  return(
    <LoginBox>
      <form onSubmit={(e) => {handleLogin(Id, PW);e.preventDefault(); }}>
        <article>
          <label htmlFor="idbox">아이디 : </label>
          <input type="text" id="idbox" onChange={(event) => {IdChange(event)}}></input>
        </article>
        <article>
        <label htmlFor="pwbox">비밀번호 : </label>
          <input type="password" id="pwbox" onChange={(event) => {PwChange(event)}}></input>
        </article>
        <button type="submit">로그인</button>
        <button>회원가입</button>
      </form>
    </LoginBox>
  );
}

export default Login;