// src/components/Sidebar.js
//참고 : https://velog.io/@dazzlynn/React-%EB%A7%9B%EC%A7%91%EC%A0%84%EA%B3%B5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94-%EA%B5%AC%ED%98%84

import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import paperielogo from "../assets/paperielogo.png";


// 아이콘 import
import { BsFileEarmarkText } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoLaw } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";


const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 300vh; /* 화면 전체 높이로 설정 */
  //margin-right: 10%;
  background-color: white; /* 배경색을 여기에 지정하세요 */
`;


const Logo = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  margin-top: 40px; /* 로고와 페이지 상단과의 거리 */
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  const menus = [
    { name: "논문", path: "/", icon: <BsFileEarmarkText />, arrowIcon: <HiOutlineArrowNarrowRight /> },
    { name: "책", path: "/book", icon: <IoBookOutline />, arrowIcon: <HiOutlineArrowNarrowRight /> },
    { name: "기사", path: "/article", icon: <GrArticle />, arrowIcon: <HiOutlineArrowNarrowRight /> },
    { name: "법", path: "/law", icon: <GoLaw />, arrowIcon: <HiOutlineArrowNarrowRight /> },
    { name: "Help", path: "/help", icon: <BiHelpCircle />, arrowIcon: <HiOutlineArrowNarrowRight /> }
  ];

  return (
    <Side>
      <Logo src={paperielogo}></Logo>
      <Menu>
        {menus.map((menu, index) => (
          <NavLink
            exact
            style={{ textDecoration: "none" }}
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

export default Sidebar;
