//src\components\JoinHello.js

import React from "react";
import { createRoot } from 'react-dom/client'; 
import styled from "styled-components";
import "./join.css";
import handImg from "../assets/handImg.png";

const HelloContainer = styled.div`
  margin-bottom: 30px; /* 아이디창과의 거리 */
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const JoinHello = () => {
  return (
    <>
        <HelloContainer>
          <h3 className="HelloText">
            안녕하세요, <img src={handImg} alt="hand" />
          </h3>
          <h3 className="HelloText">회원가입하고 마이페이지 기능을 사용해 보세요!</h3>
        </HelloContainer>
      </>
  );
};

export default JoinHello;

