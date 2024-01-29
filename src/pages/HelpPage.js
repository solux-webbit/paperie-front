import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar.js";
import TopBar from "../components/TopBar.js";

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #FAFBFF;    /*배경색: 연한 하늘색*/
  /*background-color: #F5F6FB;*/
  padding: 20px;
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