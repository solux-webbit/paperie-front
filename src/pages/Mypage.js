//src\pages\Mypage.js

import React from "react";
import "./mypage.css";
import arrow from "../assets/arrow.png"
import {Navbar, Nav, Form, Button, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Mysidebar from "../components/Mysidebar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleMypage from "../components/ArticleMypage.js";
import BookMypage from "../components/BookMypage.js";
import ReportMypage from "../components/ReportMypage.js";

const handleLink = () => {
//링크버튼 처리
}

const Mypage = ({ results }) => { 

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
      <table className="caption-top table-borderless table-hover">
        <tbody>
        {results && results.length > 0 ? (
        results.map((result, index) => {
        const themeClassName = result.type === '책' ? 'book' : result.type === '기사' ? 'article' : result.type === '논문' ? 'report' : '';
        return (
          <tr key={index} className={themeClassName}>
          <td>{result.articleTitle}</td>
          </tr>
          );
        })
      ) : (
        <>
           <BookMypage/>
           <ArticleMypage/>
           <ReportMypage/>
           </>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Mypage;