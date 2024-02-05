// //src\components\TopBar.js

import React, { useState } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal"; 
import "./SignIn.css";
import axios from "axios";

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #FAFBFF;
`;

class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      isLoggedIn: false,
      id: "",
      password: "",
      username: "",
    };
  }

  _changeID = function () {
    const id_v = document.getElementsByName('Id')[0].value;

    this.setState({
      id: id_v,
    });
  }

  _changePW = function () {
    const pw_v = document.getElementsByName("Pwd")[0].value;

    this.setState({
      password: pw_v,
    });
  }

  openModal = function () {
    this.setState({
      isModalVisible: true,
    });
  }

  closeModal = function () {
    this.setState({
      isModalVisible: false,
    });
  }

  handleLoginSuccess = (username) => {
    this.setState({
      isLoggedIn: true,
      username: username,
    });
  }

  handleLogout = async () => {
    // 로그아웃 처리 로직을 여기에 추가
    try{
      const username = this.state.username; 
      const res = await axios.post("http://127.0.0.1:8000/accounts/logout/", {
          username,
        });
        // 로그아웃이 성공한 경우에 대한 처리
        const user = res.data;
        const jwtToken = user.token;
        const { result, errorCause } = res.data;
  
        // 토큰 저장
        sessionStorage.removeItem("userToken", jwtToken);

        this.setState({
          isLoggedIn: false,
        });
  
      } catch (error) {
        // 로그아웃이 실패한 경우에 대한 처리
        console.error("로그아웃 실패:", error);
      }
  };

  render() {
    console.log('아이디 : ' + this.state.id + ', 비밀번호 : ' + this.state.password);
    return (
      <TopBarWrapper>
        {this.state.isLoggedIn ? (
          <Button variant="light" onClick={() => this.handleLogout()}>logout</Button>) : (
            <Button variant="light" onClick={() => this.openModal()}>login</Button>
          )}
        &nbsp;
        <LoginModal
          visible={this.state.isModalVisible}
          closeModal={() => this.closeModal()}
          changeID={() => this._changeID()}
          changePW={() => this._changePW()}
          onLoginSuccess={this.handleLoginSuccess}
        />
        { this.state.isLoggedIn ? (
          <Link to="/mypage">
            <Button variant="light">mypage</Button>
          </Link>
        ) : (<Button variant="light" disabled>Mypage</Button>) }
      </TopBarWrapper>
    );
  }
}

export default TopBar;