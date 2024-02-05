// src\components\ResultReport.js

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";
import axios from "axios";
import References from './References';

function ResultReport({ searchResults, setApa, setMla, setChicago, setVan }) {
  const controls = useAnimation();

  const [apaResults, setApaResults] = useState([]);
  const [mlaResults, setMlaResults] = useState([]);
  const [chiResults, setChiResults] = useState([]);
  const [vnaResults, setVanResults] = useState([]);
  

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
  
  const handleCellClick = async (data) => {
    try {
      ///APA
      const getApaUrl = `http://127.0.0.1:8000/apa/scholars?selected_title=${data}`;
  
      const getApa = await axios.get(getApaUrl);
      setApaResults(getApa.data);
      console.log(getApa.data);
      ///setApa(getApa.data);

      ///MLA
      const getMlaUrl = `http://127.0.0.1:8000/mla/scholars?selected_title=${data}`;
  
      const getMla = await axios.get(getMlaUrl);
      setMlaResults(getMla.data);
      console.log(getMla.data);
      ///setMla(getMla.data.data.results);

      ///CHI
      const getChiUrl = `http://127.0.0.1:8000/chi/scholars?selected_title=${data}`;
  
      const getChi = await axios.get(getChiUrl);
      setChiResults(getChi.data);
      console.log(getChi.data);
      ///setChicago(getChi.data.data.results);

      ///VAN
      const getVanUrl = `http://127.0.0.1:8000/van/scholars?selected_title=${data}`;
  
      const getVan = await axios.get(getVanUrl);
      setVanResults(getVan.data);
      console.log(getVan.data);
      ///setVan(getVan.data.data.results);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.0 }}
      animate={controls}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="result_border"
    >
      {searchResults && searchResults.length > 0 && (
        <table className="caption-top table-borderless table-hover">
          <caption className="result_table_name"> 검색결과 </caption>
          <thead>
            <tr>
              <th className="search_name" scope="col" width="800px">논문 제목</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((data, index) => (
              <tr key={index} className="result_name">
                <td onClick={() => handleCellClick(data.title)}>
                  {data.title}
                </td>
              </tr>
            ))}
            <References apa={apaResults} mla={mlaResults} chicago={chiResults} van={vnaResults}/>
          </tbody>
        </table>
      )}
    </motion.div>
  );
}

export default ResultReport;

