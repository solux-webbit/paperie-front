// src\components\ResultReport.js

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";
import axios from "axios";
import References from './References';

const ResultReport = ({ searchResults }) => {
  const controls = useAnimation();
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 애니메이션 컨트롤
      const scrollY = window.scrollY;
      controls.start({ opacity: scrollY > 200 ? 1 : 0.1 }); // 스크롤 위치에 따라 opacity 조절
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);
  
  const handleCellClick = (title) => {
    console.log('선택된 제목: ', title);
    axios.get(`http://127.0.0.1:8000/apa/news?selected_title=${title}`)
    .then(response => {
      console.log("성공: ", response.data);
    })
    .catch(error => {
      console.error("실패: ", error);
    })

  };

  useEffect(() => {
    // Check if there are search results
    setShowNoResultsMessage(!searchResults || searchResults.length === 0);
  }, [searchResults]);

  return (
    <motion.div
      initial={{ opacity: 0.0 }}
      animate={controls}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="result_border"
    >
      <table className="caption-top table-borderless table-hover">
        <caption className="result_table_name"> 검색결과 </caption>
        <thead>
          <tr>
            <th className="search_name" scope="col" width="800px">논문제목</th>
          </tr>
        </thead>
        <tbody>
          {searchResults && searchResults.length > 0 && (
            searchResults.map((result, index) => (
              <tr key={index} className="result_name">
                <td onClick={() => handleCellClick(result.title)}>
                  <References title={result.title} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ResultReport;

