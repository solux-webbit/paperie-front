//src\pages\Mypage.js

import React, { useState } from "react";
import { createRoot } from "react-dom";
import "./mypage.css";
import arrow from "../assets/arrow.png"
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import { NavLink, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import paperielogo from "../assets/paperielogo.png";
import Mysidebar from "../components/Mysidebar.js";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Navbar.Brand href="#all" className="my_menu">전체</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#paper" className="my_menu">논문</Nav.Link>
            <Nav.Link href="#book" className="my_menu">책</Nav.Link>
            <Nav.Link href="#article" className="my_menu">기사</Nav.Link>
            <Nav.Link href="#law" className="my_menu">법</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="키워드로 검색"
              className="me-2"
              aria-label="Search"/>
            <Button variant="outline-info" className="search">검색</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
    </>
  );
}

export default Mypage;