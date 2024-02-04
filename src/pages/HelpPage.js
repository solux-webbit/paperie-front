//src\pages\HelpPage.js

import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar.js";
import TopBar from "../components/TopBar.js";

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
        <h1> 도움말 페이지입니다~ </h1>
        </ContentContainer>
        </>
      );
    };
  
  export default HelpPage;