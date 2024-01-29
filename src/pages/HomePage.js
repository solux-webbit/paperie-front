// Home.js

import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar.js";
import TopBar from "../components/TopBar.js";
import SearchReport from "../components/SearchReport.js";
import References from "../components/References.js";
import Result from "../components/Result.js";

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /*background-color: #FAFBFF;    /*배경색: 연한 하늘색*/
  background: linear-gradient(to bottom, #FAFBFF, #D8E3FA);
  padding: 20px;
`;

const SearchContainer = styled.div`
  margin-left: 70px; /* 사이드바와의 거리 */
  flex-direction: column;
`;

const ResultContainer = styled.div`
  margin-left: 70px; /* 사이드바와의 거리 */
`;

const ReferencesContainer = styled.div`
  margin-left: 70px; /* 사이드바와의 거리 */
`;

const Home = () => {
  return (
    <>
    <Sidebar />
    <ContentContainer>
    <TopBar />
    <SearchContainer> 
    <SearchReport/> 
    </SearchContainer>
    <ResultContainer>
    <Result/>
    </ResultContainer>
    <ReferencesContainer> 
    <References /> 
    </ReferencesContainer>
    </ContentContainer>
    </>
  );
};

export default Home;
