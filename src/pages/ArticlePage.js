// src\pages\ArticlePage.js

import React, {  useEffect, useState } from 'react';
import styled from "styled-components";
import Sidebar from "../components/Sidebar.js";
import TopBar from "../components/TopBar.js";
import SearchArticle from "../components/SearchArticle.js";
import References from "../components/References.js";
import ResultArticle from "../components/ResultArticle.js";

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

const ArticlePage = () => {

  return (
    <>
      <Sidebar />
      <ContentContainer>
        <TopBar />
        <SearchContainer> 
          <SearchArticle /> 
        </SearchContainer>
        <ResultContainer>
          <ResultArticle/>
        </ResultContainer>
        <ReferencesContainer> 
        </ReferencesContainer>
      </ContentContainer>
    </>
  );
};

export default ArticlePage;
