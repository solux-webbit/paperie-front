// src\components\Mysidebar.js

import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import paperielogo from "../assets/paperielogo.png";
import arrow from "../assets/arrow.png";
import past from "../assets/past.png";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";
import cross from "../assets/cross.png";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 300vh; /* 화면 전체 높이로 설정 */
  background-color: white; /* 배경색을 여기에 지정하세요 */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* 오른쪽 그림자 추가 */
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-top: 20px; /* 로고와 페이지 상단과의 거리 */
  margin-right: 150px;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const activeStyle = {
  fontWeight: 'bold',
  textDecoration: "none"

};

const Icon = styled.img`
    width: 22px;
    height: 22px;
`;

function Mysidebar() {
  const location = useLocation();

  const menus = [
    { name: "과거 인용기록", path: "/mypage", icon: <Icon src={past}/> },
    { name: "회원정보 수정", path: "/profileEditPage", icon: <Icon src={settings}/> },
    { name: "로그아웃", path: "/", icon: <Icon src={logout}/> },
    { name: "회원탈퇴", path: "/", icon: <Icon src={cross}/> },
  ];

  return (
    <Side>
      <Link to="/">
        <Logo src={paperielogo}></Logo>
      </Link>
      <Menu>
        {menus.map((menu, index) => (
          <NavLink
            exact
            style={location.pathname === menu.path ? activeStyle : { textDecoration: "none" }}
            to={menu.path}
            key={index}
          >
            <SidebarItem menu={menu} />
          </NavLink>
        ))}
      </Menu>
    </Side>
  );
}

export default Mysidebar;