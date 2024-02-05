//src\components\SearchReport.js

import React, { useState } from "react";
import axios from "axios";
import handImg from "../assets/handImg.png";
import searchImg from "../assets/search.png";
import ResultReport from "./ResultReport";

const SearchReport = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const inputGroupStyle = {
    display: "flex",
    alignItems: "center",
  };

  const inputBoxStyle = {
    width: "845px",
    padding: "30px",
    margin: "5px",
    border: "none",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px -3px #B5B7C0",
    outline: "none",
  };

  const searchButtonStyle = {
    marginLeft: "-90px",
    padding: "10px",
    cursor: "pointer",
  };

  const handleSearch = async () => {
    try {
      const requestData = {
        searchValue: searchValue,
      };

      const getApiUrl = `http://127.0.0.1:8000/api/scholars?query=${encodeURIComponent(requestData.searchValue)}`;
      const getResponse = await axios.get(getApiUrl);
      const searchResults = getResponse.data || [];
      setSearchResults(searchResults);
      console.log("list-------", searchResults);

      // 검색 결과가 있을 때 아래로 스크롤 조정
      if (searchResults.length > 0) {
        const scrollAmount = window.innerWidth < 600 ? 200 : 380; // 스크롤을 얼마나 이동시킬지 조정
        window.scrollBy({ top: scrollAmount, behavior: "smooth" });
      }

    } catch (error) {
      console.error('검색 결과를 가져오는 중 오류 발생:', error.message);
    }
  };

  return (
    <>
      <h1>
        안녕하세요, <img src={handImg} alt="hand" />
      </h1>
      <h1>어떤 논문을 인용하시겠어요?</h1>
      <div style={inputGroupStyle}>
        <input
          type="text"
          placeholder="논문 제목을 입력하세요"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={inputBoxStyle}
        />
        <div style={searchButtonStyle} onClick={handleSearch}>
          <img
            src={searchImg}
            alt="Search"
            style={{ width: "90%", height: "90%" }}
          />
        </div>
      </div>

      <ResultReport searchResults={searchResults} />
    </>
  );
};


export default SearchReport;

