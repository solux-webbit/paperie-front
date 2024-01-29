//src\pages\Mypage.js

import React, { useState } from "react";
import { createRoot } from "react-dom";
import "./mypage.css";
import arrow from "../assets/arrow.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import paperielogo from "../assets/paperielogo.png";
import Mysidebar from "../components/Mysidebar.js";
import { Link } from "react-router-dom";

const Mypage = () => { 

  return (
    <>
    <Mysidebar />
    <div className="ref_container">
        <Link to="/">
            <button className="goback">
                <img className="arrow" src={arrow}/>
            </button>
        </Link>
        <h3 className="ref_history">
        000님의 과거 인용기록
        </h3>
        <Navbar bg="light" data-bs-theme="light">
        <Container className="navbar">
          <Navbar.Brand href="#home"/>
          <Nav className="me-auto">
            <Nav.Link href="#paper">논문</Nav.Link>
            <Nav.Link href="#book">책</Nav.Link>
            <Nav.Link href="#article">기사</Nav.Link>
            <Nav.Link href="#law">법</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  );
}

export default Mypage;