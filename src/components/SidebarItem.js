// src/components/SidebarItem.js

import React from "react";
import styled from "styled-components";

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  color: gray; /* 기본 텍스트, 아이콘 색상은 회색으로 설정 */
`;

const Icon = styled.div`
  margin-right: 15px;
  font-size: 1.2em;
`;

const Text = styled.div`
  color: gray;
  font-size: 1.2em;
  display: flex;
  align-items: center;
`;

function SidebarItem({ menu }) {
  return (
    <MenuItem>
      <Text>
        {menu.icon && <Icon>{menu.icon}</Icon>}
        {menu.name}
      </Text>
      {menu.arrowIcon && <Icon>{menu.arrowIcon}</Icon>}
    </MenuItem>
  );
}

export default SidebarItem;
