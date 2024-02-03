import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";
import axios from "axios";
import References from './References';


function ResultArticle({ searchResults, setApa, setMla, setChicago, setVan }) {
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
  
  const handleCellClick = async (title) => {
    try {
      ///APA
      const getApaUrl = `http://127.0.0.1:8000/apa/news?selected_title=${title}`;
  
      const getApa = await axios.get(getApaUrl);

      const apaResult = getApa.data.data.results;

      setApa(apaResult);

      ///MLA
      const getMlaUrl = `http://127.0.0.1:8000/mla/news?selected_title=${title}`;
  
      const getMla = await axios.get(getMlaUrl);

      const mlaResult = getMla.data.data.results;

      setMla(mlaResult);

      ///CHI
      const getChiUrl = `http://127.0.0.1:8000/chi/news?selected_title=${title}`;
  
      const getChi = await axios.get(getChiUrl);

      const chiResult = getChi.data.data.results;

      setChicago(chiResult);

      ///VAN
      const getVanUrl = `http://127.0.0.1:8000/van/news?selected_title=${title}`;
  
      const getVan = await axios.get(getVanUrl);

      const vanResult = getVan.data.data.results;

      setVan(vanResult);

    } catch (error) {
      console.error('검색 결과를 가져오는 중 오류 발생:', error.message);
    }
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
            <th className="search_name" scope="col" width="800px">기사제목</th>
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
}

export default ResultArticle;
