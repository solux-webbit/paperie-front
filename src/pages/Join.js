import React, { useState } from "react";
import { createRoot } from "react-dom";
import styled from "styled-components";
import Join_hello from "../components/Join_hello";

const Join = () => { 
  const HelloContainer = styled.div`
    margin-bottom: 70px; /* 아이디창과의 거리 */
  `;

  const handleID= () => {
    // 인용 결과 확인 함수
  };

  return (
        <Join_hello/>
  );
};

export default Join;
const root = createRoot(document.getElementById("root"));
root.render(<Join/>);
