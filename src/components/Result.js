// // src\components\Result.js

// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import "./result.css";

// function References() {
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       controls.start({ opacity: scrollY > 200 ? 1 : 0.1 });
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [controls]);

//   return (
//     <motion.div
//       initial={{ opacity: 0.0 }}
//       animate={controls}
//       transition={{ ease: "easeInOut", duration: 0.2 }}
//       className="result_border"
//     >
//       <table className="caption-top table-borderless table-hover">
//         <caption className="result_table_name"> 검색결과 </caption>
//         <thead>
//           <tr>
//             <th className="search_name" scope="col" width="800px">논문제목</th>
//           </tr>
//         </thead>
//          <tbody>
//           <tr className="result_name">
//             {/*이곳에 backend에서 받은 기사 제목 검색 결과를 작성 */}
//           </tr>
//           <tr className="result_name">
//             {/*이곳에 backend에서 받은 기사 제목 검색 결과를 작성 */}
//           </tr>
//           <tr className="result_name">
//             {/*이곳에 backend에서 받은 기사 제목 검색 결과를 작성 */}
//           </tr>
//           <tr className="result_name">
//             {/*이곳에 backend에서 받은 기사 제목 검색 결과를 작성 */}
//           </tr>
//           <tr className="result_name">
//             {/*이곳에 backend에서 받은 기사 제목 검색 결과를 작성 */}
//           </tr>
//           <tr className="result_name">
//             {/*이곳에 backend에서 받은 기사 제목 검색 결과를 작성 */}
//           </tr>
//           <tr className="result_name">
//           </tr>
//           <tr className="result_name">
//           </tr>
//           <tr className="result_name">
//           </tr>
//           <tr className="result_name">
//           </tr>
//          </tbody>
//         </table>
//   </motion.div>
//   );
// }

// export default References;
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./result.css";

function Result({ results }) {
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
          {results && results.length > 0 ? (
            results.map((result, index) => (
              <tr key={index} className="result_name">
                <td>{result.articleTitle}</td>
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

export default Result;
