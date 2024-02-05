//src\pages\HomePage.js

import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar.js";
import TopBar from "../components/TopBar.js";
import SearchReport from "../components/SearchReport.js";
import References from "../components/References.js";
import ResultReport from "../components/ResultReport.js";
import { AuthProvider } from '../components/AuthContext';

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #FAFBFF, #D8E3FA);
  padding: 20px;
  min-height: 300vh; /* 세로 높이를 300vh로 설정 */
`;

const SearchContainer = styled.div`
  margin-left: 70px;
  flex-direction: column;
`;

const ResultContainer = styled.div`
  margin-left: 70px;
`;

const ReferencesContainer = styled.div`
  margin-left: 70px;
`;

const HomePage = () => {
  return (
    
    <AuthProvider>
    <>
      <Sidebar />
      <ContentContainer>
        <TopBar />
        <SearchContainer> 
          <SearchReport /> 
        </SearchContainer>
        <ResultContainer>
          <ResultReport />
        </ResultContainer>
        <ReferencesContainer> 
        </ReferencesContainer>
      </ContentContainer>
    </>
    </AuthProvider>
  );
};

export default HomePage;
