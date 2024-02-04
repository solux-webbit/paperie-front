//src\components\References.js

import React, { useState, useEffect } from 'react';
import "./table.css";
import copy_img from "../assets/copy_img.png"
import { motion, useAnimation } from 'framer-motion';
import axios from "axios";


function References({ apa, chicago, mla, van, result_title }) {

  const controls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 애니메이션 컨트롤
      const scrollY = window.scrollY;
      controls.start({ opacity: scrollY > 400 ? 1 : 0.1 }); // 스크롤 위치에 따라 opacity 조절
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);


  const handleCopyClipBoard = (text) => {
    try {
      navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (e) {
      alert('클립보드 복사에 실패하였습니다');
    }
  };

  const handleToMypage = async (reference, result) =>{
    try{
      const response = await axios.post("http://127.0.0.1:8000/mypage/get?title={title}&ref={ref}", {
        title: result_title,
        ref : reference,
        type : "article",
        content: {result},

        });
        console.log(response.data);
      } catch (error) {
        console.error("Mypage로 옮기기 실패", error);
      }
  }

  const renderTableRow = (type, result) => (
    <tr key={type}>
      <td className='refer_type' scope="row" width="200px">{type}</td>
      <td className={`${type.toLowerCase()}_result`} width="500px">{result}</td>
      <td>
        <button type="button" className="copy_button" 
        onClick={() => {
          handleCopyClipBoard(result);
          handleToMypage(type, result);
        }}>
          <div>
            <img className="copy_img" src={copy_img} alt={`${type} Copy`} />
            Copy
          </div>
        </button>
      </td>
    </tr>
  );

  return (
    <motion.div
      initial={{ opacity: 0.0 }}
      animate={controls}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="table_border"
    >
      <table className="caption-top table-borderless table-hover" height="400px">
        <caption className="refer_table_name"> 출처표기법 </caption>
        <thead>
          <tr>
            <th className="table_menu" scope="col">Type</th>
            <th className="table_menu" scope="col">Result</th>
            <th className="table_menu" scope="col">Copy</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow('APA', apa)}
          {renderTableRow('Chicago', chicago)}
          {renderTableRow('MLA', mla)}
          {renderTableRow('Vancouver', van)}
        </tbody>
      </table>
    </motion.div>
  );
}

export default References;