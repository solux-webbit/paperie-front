// src/pages/BookPage.js
import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar.js";
import TopBar from "../components/TopBar.js";
import SearchBook from "../components/SearchBook.js";
import References from "../components/References.js";
import ResultBook from "../components/ResultBook.js";

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #FAFBFF, #D8E3FA);
  padding: 20px;
  min-height: 300vh; /* 세로 높이를 300vh로 설정 */
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

const BookPage = () => {
  return (
    <>
      <Sidebar />
      <ContentContainer>
        <TopBar />
        <SearchContainer> 
          <SearchBook/> 
        </SearchContainer>
        <ResultContainer>
          <ResultBook/>
        </ResultContainer>
        <ReferencesContainer> 
        </ReferencesContainer>
      </ContentContainer>
    </>
  );
};

export default BookPage;
