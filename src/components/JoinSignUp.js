import React, { useState } from "react";
import { useHistory, BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import "./join.css";
import google from "../assets/google_login.png";
import axios from "axios";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';

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

  const history = useHistory();
  
 const handleSignUp = async () => {
    try{
    const response = await axios.post("http://127.0.0.1:8000/accounts/signup/", {
        username, 
        password, 
        passwordConfirmation
      });
      // 회원가입이 성공한 경우에 대한 처리
      console.log(response.data);
      alert('회원가입 성공! 다시 로그인 해주세요.');
      history.push("/");
    } catch (error) {
      // 회원가입이 실패한 경우에 대한 처리
      console.error("회원가입 오류:", error);
    }
  };


  const googleLogin = () =>{
    const clientId = "69559059206-hqnbf55oh5spefj6floi15270mn8bdag.apps.googleusercontent.com"
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
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
        <a href="http://localhost:8000/google/login">
        <div className="Google"  onClick={googleLogin}>
            <img src={google}/>
        </div>
        </a>
    </SocialContainer>
    </>
  );
};

export default JoinSignUp;
