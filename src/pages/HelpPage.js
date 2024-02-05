//src\pages\HelpPage.js

import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar.js";
import TopBar from "../components/TopBar.js";
import Aboutus from "../assets/Aboutus.jpg";

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #FAFBFF, #D8E3FA);
  padding: 20px;
  min-height: 300vh; /* 세로 높이를 300vh로 설정 */
`;

const HelpPage = () => { 
    return (
        <>
        <Sidebar />
        <ContentContainer>
        <TopBar />
        <h1> About Us </h1>
        <br></br>
        <h3> 숙명여자대학교 유일무이 중앙 코딩동아리</h3>
        <h3> SOLUX Team WEBIT</h3>
        <img src={Aboutus} alt="우리 사진" />
        <br></br>
        <br></br>
        <h3> 팀장 : 한지수<br></br>
        팀원 : 김유진, 유윤지, 이유정, 조채림<br></br>

        </h3>

        </ContentContainer>
        </>
      );
    };
  
  export default HelpPage;