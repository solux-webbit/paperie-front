//src\pages\Mypage.js

import React,  { useRef, useState, useEffect } from "react";
import "./mypage.css";
import arrow from "../assets/arrow.png"
import {Navbar, Nav, Form, Button, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Mysidebar from "../components/Mysidebar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleMypage from "../components/ArticleMypage.js";
import BookMypage from "../components/BookMypage.js";
import ReportMypage from "../components/ReportMypage.js";
import axios from 'axios';

const handleLink = () => {
//링크버튼 처리
}

const Mypage = ( ) => { 

  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState("전체");


  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/mypage/all');
        const fetchedData = response.data;
        console.log(fetchedData);

        // 받아온 데이터를 상태(State)에 저장
        setData(fetchedData);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생', error);
      }
    };

    fetchDataFromServer();
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };


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
        과거 인용기록
        </h3>
        <Navbar bg="light" data-bs-theme="light">
        <Container className="navbar">
        <Nav activeKey={selectedType} onSelect={(selectedKey) => handleTypeChange(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="전체">전체</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="논문">논문</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="책">책</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="뉴스">기사</Nav.Link>
        </Nav.Item>
        </Nav>
        </Container>
      </Navbar>
      <table className="caption-top table-borderless table-hover">
        <tbody>
        {data && data.length > 0 ? (
          data
            .filter((element) => selectedType === "전체" || element.Type === selectedType)
            .reverse().map((element) => {
              let renderedComponent;

              if (element.Type === "책") {
                renderedComponent = (
                  <BookMypage fref={element.Ref} date={element.Date} content={element.Content} />
                );
              } else if (element.Type === "뉴스") {
                renderedComponent = (
                  <ArticleMypage fref={element.Ref} date={element.Date} content={element.Content} />
                );
              } else if (element.Type === "논문") {
                renderedComponent = (
                  <ReportMypage fref={element.Ref} date={element.Date} content={element.Content} />
                );
              } else {
                // 기본적으로 처리해야 할 경우
                renderedComponent = <div key={element.Id}>알 수 없는 유형의 자료입니다.</div>;
              }

              return renderedComponent;
            })
        ) : (
    <div>알 수 없는 유형의 자료입니다.</div>
  )}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Mypage;