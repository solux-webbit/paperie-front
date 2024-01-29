import React, { useState } from "react";
import { createRoot } from 'react-dom/client'; 
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./join.css";
import handImg from "../assets/handImg.png";
import logo from "../assets/paperielogo.png";
import google from "../assets/google_login.png";
import back from "../assets/back_button.png";

const Join_hello = () => {
  const [IDValue, setIDValue] = useState("");
  const [PWValue, setPWValue] = useState("");
  const [PWCValue, setPWCValue] = useState("");

  const BackContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

  const HelloContainer = styled.div`
    margin-bottom: 30px; /* 아이디창과의 거리 */
    display: flex;
    flex-direction: column;
    align-items: left;
  `;

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
`;

  const handleID = (e) => {
    setIDValue(e.target.value);
  };

  const handlePW = (e) => {
    setPWValue(e.target.value);
  };

  const handlePWC = (e) => {
    setPWCValue(e.target.value);
  };

  const SignUp = () => {
    /*회원가입 함수*/
  }

  const googleLogin = () =>{
     /*구글로그인 함수*/
  }


  return (
    <>
    <div className="BoxStyle">
      <BackContainer>
      <Link to="/">
        <div className="BackButton">
          <img src={back} alt="뒤로가기" />
        </div>
        </Link>
      </BackContainer>
      <div className="LeftContent">
        <HelloContainer>
          <h3 className="HelloText">
            안녕하세요, <img src={handImg} alt="hand" />
          </h3>
          <h3 className="HelloText">회원가입하고 마이페이지 기능을 사용해 보세요!</h3>
        </HelloContainer>
        <InputContainer>
          <input
            className="InputBoxStyle"
            type="text"
            placeholder="아이디"
            value={IDValue}
            onChange={(e) => setIDValue(e.target.value)}
          />
          <input
            className="InputBoxStyle"
            type="text"
            placeholder="비밀번호"
            value={PWValue}
            onChange={(e) => setPWValue(e.target.value)}
          />
          <input
            className="InputBoxStyle"
            type="text"
            placeholder="비밀번호 재확인"
            value={PWCValue}
            onChange={(e) => setPWCValue(e.target.value)}
          />
        </InputContainer>
        <SignUpContainer>
        <div className="RedText">모든 항목은 필수항목입니다.</div>
        <button class="SignUpButton">회원가입하기</button>
        </SignUpContainer>
        <SocialContainer>
          <h6 className="SocialText">소셜 계정으로 간편하게 로그인하기</h6>
          <div className="Google"  onclick={googleLogin}>
          <img src={google}/>
          </div>
        </SocialContainer>
      </div>
      <div className="VerticalLine" />
      <div className="RightContent">
        <img src={logo} style={{width: '250px', height: '250px'}}/>
      </div>
    </div>
    </>
  );
};

export default Join_hello;

const root = createRoot(document.getElementById("root"));
root.render(<Join_hello />);

