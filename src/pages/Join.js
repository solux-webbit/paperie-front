//src\pages\Join.js

import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import "../components/join.css";
import JoinHello from "../components/JoinHello";
import JoinSignUp from "../components/JoinSignUp";
import back from "../assets/back_button.png";
import logo from "../assets/paperielogo.png";

const JoinContainer = styled.div`
  background-color: blue; /* Join 컨테이너의 배경색을 파란색으로 설정 */
  height: 100vh; /* 화면 전체 높이로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackContainer = styled.div`
display: flex;
align-items: flex-start;
margin-top: 10px;
margin-left: 10px;
position: absolute;
top: 10px;
left: 10px;
`;


const Join = () => {
  return (
    <JoinContainer>
      <div className="BoxStyle">
      <BackContainer>
      <Link to="/">
        <div className="BackButton">
          <img src={back} alt="뒤로가기" />
        </div>
        </Link>
      </BackContainer>
      <div className="LeftContent">
        <JoinHello/>
        <JoinSignUp/>
      </div>
      <div className="VerticalLine" />
      <div className="RightContent">
        <img src={logo} style={{width: '250px', height: '250px'}}/>
      </div>
      </div>
    </JoinContainer>
  );
};

export default Join;

const root = createRoot(document.getElementById("root"));
root.render(<Join />);
