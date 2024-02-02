// Result.js

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";
import References from './References';

const Results = ({ searchResults }) => {
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
        <tbody>
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <tr key={index} className="result_name">
              <td>
                <References title={result.title} />
              </td>
            </tr>
            ))
          ) : !showNoResultsMessage ? (
            <tr>
              <td colSpan="1">검색 결과가 없습니다.</td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Results;