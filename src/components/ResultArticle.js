import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";
import axios from "axios";
import References from './References';


function ResultArticle({ searchResults, setApa, setMla, setChicago, setVan }) {
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
  
  const handleCellClick = async (title) => {
    try {
      ///APA
      const getApaUrl = `http://127.0.0.1:8000/apa/news?selected_title=${title}`;
  
      const getApa = await axios.get(getApaUrl);
      setApaResults(getApa.data[0]);
      console.log(getApa.data[0]);
      ///setApa(getApa.data);

      ///MLA
      const getMlaUrl = `http://127.0.0.1:8000/mla/news?selected_title=${title}`;
  
      const getMla = await axios.get(getMlaUrl);
      setMlaResults(getMla.data[0]);
      console.log(getMla.data[0]);
      ///setMla(getMla.data.data.results);

      ///CHI
      const getChiUrl = `http://127.0.0.1:8000/chi/news?selected_title=${title}`;
  
      const getChi = await axios.get(getChiUrl);
      setChiResults(getChi.data[0]);
      console.log(getChi.data[0]);
      ///setChicago(getChi.data.data.results);

      ///VAN
      const getVanUrl = `http://127.0.0.1:8000/van/news?selected_title=${title}`;
  
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
              <th className="search_name" scope="col" width="800px">기사 제목</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index} className="result_name">
                <td onClick={() => handleCellClick(result.title)}>
                  {result.title}
                </td>
              </tr>
            ))}
        <References title={searchResults[0].title} ftype="뉴스" apa={apaResults} mla={mlaResults} chicago={chiResults} van={vnaResults} />
          </tbody>
        </table>
      )}
    </motion.div>
  );
}

export default ResultArticle;
