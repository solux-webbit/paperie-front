//src\pages\Join.js

import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import styled from "styled-components";
import JoinHello from "../components/JoinHello";

const JoinContainer = styled.div`
  background-color: blue; /* Join 컨테이너의 배경색을 파란색으로 설정 */
  height: 100vh; /* 화면 전체 높이로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Join = () => {
  return (
    <JoinContainer>
      <JoinHello />
    </JoinContainer>
  );
};

export default Join;

const root = createRoot(document.getElementById("root"));
root.render(<Join />);
