// src\components\search.js

import React, { useState } from "react";
import { createRoot } from "react-dom";
import handImg from "../assets/handImg.png";
import searchImg from "../assets/search.png";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const inputGroupStyle = {
    display: "flex",
    alignItems: "center",
  };
  const inputBoxStyle = {
    width: "800px",
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

  const handleSearch = () => {
    //인용 결과 확인 함수
  };

  return (
    <>
      <h1>
        안녕하세요, <img src={handImg} alt="hand" />
      </h1>
      <h1>어떤 기사를 인용하시겠어요?</h1>
      <div style={inputGroupStyle}>
        <input
          type="text"
          placeholder="Paste URL..."
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

export default Search;
const root = createRoot(document.getElementById("root"));
root.render(<Search />);
