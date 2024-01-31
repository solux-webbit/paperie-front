//src\components\SearchBook.js

import React, { useState } from "react";
import axios from "axios";
import { createRoot } from 'react-dom/client';
import handImg from "../assets/handImg.png";
import searchImg from "../assets/search.png";

const Search_book = () => {
  const [searchValue, setSearchValue] = useState("");

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
      // 요청 페이로드
      const requestData = {
        query: searchValue,
        // 다른 필요한 데이터가 있다면 추가하세요
      };

      // 백엔드 API 엔드포인트 URL
      const apiUrl = 'http://127.0.0.1:8000/api/books?query=' + encodeURIComponent(requestData.query);

      // 백엔드로 POST 요청 보내기
      const response = await axios.post(apiUrl, requestData);

      // 백엔드 응답 처리 (필요시)
      console.log(response.data);

      // 응답에 기반한 추가 작업이 필요하면 수행하세요
    } catch (error) {
      // 요청 중 발생한 오류 처리
      console.error('백엔드로 데이터를 전송하는 동안 오류 발생:', error.message);
    }
  };

  return (
    <>
      <h1>
        안녕하세요, <img src={handImg} alt="hand" />
      </h1>
      <h1>어떤 책을 인용하시겠어요?</h1>
      <div style={inputGroupStyle}>
        <input
          type="text"
          placeholder="책 제목을 입력하세요"
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
    </>
  );
};

export default Search_book;

const root = createRoot(document.getElementById("root"));
root.render(<Search_book />);
