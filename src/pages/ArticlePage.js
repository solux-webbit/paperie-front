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
  const [apa, setApa] = useState("Smith, J. A. (2022). Climate Change and Its Impact on Biodiversity. Environmental Science Journal, 28(3), 123-145.");
  const [chicago, setChicago] = useState(`Smith, John A. "Climate Change and Its Impact on Biodiversity." Environmental Science Journal 28, no. 3 (2022): 123-145.`);
  const [mla, setMla] = useState(`Smith, John A. "Climate Change and Its Impact on Biodiversity." Environmental Science Journal, vol. 28, no. 3, 2022, pp. 123-145.`);
  const [van, setVan] = useState("Smith JA. Climate Change and Its Impact on Biodiversity. Environmental Science Journal. 2022;28(3):123-145.");

  return (
    <>
      <Sidebar />
      <ContentContainer>
        <TopBar />
        <SearchContainer> 
          <SearchArticle /> 
        </SearchContainer>
        <ResultContainer>
          <ResultArticle
            setApa={setApa}
            setChicago={setChicago}
            setMla={setMla}
            setVan={setVan}
          />
        </ResultContainer>
        <ReferencesContainer> 
          <References apa={apa} mla={mla} chicago={chicago} van={van} /> 
        </ReferencesContainer>
      </ContentContainer>
    </>
  );
};

export default ArticlePage;
