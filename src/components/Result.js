import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";

const Results = ({ searchResults }) => {
  const controls = useAnimation(); // 애니메이션 컨트롤을 위한 hook 사용

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
                <td>{result.title}</td> {/* 실제 데이터 구조에 따라 속성 이름 조정 */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="1">검색 결과가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Results;