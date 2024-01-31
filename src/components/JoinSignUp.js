import React, { useState } from "react";
import { createRoot } from 'react-dom/client'; 
import styled from "styled-components";
import "./join.css";
import google from "../assets/google_login.png";
import axios from "axios";


const InputContainer = styled.div`
  margin-bottom: 40px; /* 회원가입 버튼과의 거리 */
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const SignUpContainer = styled.div`
margin-bottom: 30px; /* 간단로그인 버튼과의 거리 */
display: flex;
flex-direction: column;
align-items: center;
`;

const SocialContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const JoinSignUp = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
 const handleSignUp = async () => {
    try{
    const response = await axios.post("http://127.0.0.1:8000/accounts/signup/", {
        username, 
        password, 
        passwordConfirmation
      });
      // 회원가입이 성공한 경우에 대한 처리
      console.log(response.data);
    } catch (error) {
      // 회원가입이 실패한 경우에 대한 처리
      console.error("회원가입 오류:", error);
    }
  };

  const handlePW = async () => {
   
  };

  const handlePWC = async () => {
 
  };

  const SignUp = () => {
    /*회원가입 함수*/
  }

  const googleLogin = () =>{
     /*구글로그인 함수*/
  }

return (
    <>
    <InputContainer>
        <input
            className="InputBoxStyle"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            className="InputBoxStyle"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            className="InputBoxStyle"
            type="password"
            placeholder="비밀번호 재확인"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
    </InputContainer>
    <SignUpContainer>
        <div className="RedText">모든 항목은 필수항목입니다.</div>
        <button className="SignUpButton" onClick={handleSignUp}>회원가입하기</button>
    </SignUpContainer>
    <SocialContainer>
        <h6 className="SocialText">소셜 계정으로 간편하게 로그인하기</h6>
        <div className="Google"  onClick={googleLogin}>
            <img src={google}/>
        </div>
    </SocialContainer>
    </>
  );
};

export default JoinSignUp;

const root = createRoot(document.getElementById("root"));
root.render(<JoinSignUp/>);
