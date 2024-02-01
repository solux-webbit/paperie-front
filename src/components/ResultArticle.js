import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";
import axios from "axios";

function ResultArticle({ results }) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ opacity: scrollY > 200 ? 1 : 0.1 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);
  
  const handleCellClick = (articleTitle) => {
    console.log('선택된 제목: ', articleTitle);
    axios.get(`http://127.0.0.1:8000/apa/news?selected_title=${articleTitle}`)
    .then(response => {
      console.log("성공: ", response.data);
    })
    .catch(error => {
      console.error("실패: ", error);
    })

  };

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
          {results && results.length > 0 ? (
            results.map((result, index) => (
              <tr key={index} className="result_name">
                <td onClick={() => handleCellClick(result.articleTitle)}>{result.articleTitle}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="1">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
}

export default ResultArticle;
