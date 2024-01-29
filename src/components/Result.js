// src\components\Result.js

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";

function References() {
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
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
         </tbody>
        </table>
  </motion.div>
  );
}

export default References;