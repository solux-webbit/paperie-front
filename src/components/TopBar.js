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
      isLoggedIn: false, //로그인 여부 상태 추가
      id: "",
      password: "",
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

  render() {
    console.log('아이디 : ' + this.state.id + ', 비밀번호 : ' + this.state.password);
    return (
      <TopBarWrapper>
        {this.state.isLoggedIn ? (
          // 로그인 상태일 때 로그아웃 버튼을 표시
          <Button variant="light" onClick={() => this.handleLogout()}>logout</Button>
        ) : (
          // 로그아웃 상태일 때 로그인 버튼을 표시
          <Button variant="light" onClick={() => this.openModal()}>login</Button>
        )}
        &nbsp;
        <LoginModal
          visible={this.state.isModalVisible}
          closeModal={() => this.closeModal()}
          changeID={() => this._changeID()}
          changePW={() => this._changePW()}
          handleLogin={() => this.handleLogin()} //로그인 핸들러 전달
          isLoggedIn={this.state.isLoggedIn} //로그인 여부 전달
        />
        <Link to="/mypage">
          <Button variant="light">mypage</Button>
        </Link>
      </TopBarWrapper>
    );
  }
}

export default TopBar;


// import React, { useState } from "react";
// import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-awesome-modal';
// import { Link, Route } from "react-router-dom";
// import "./SignIn.css";
// import { useHistory } from "react-router-dom";

// const TopBarWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   padding: 10px 20px;
//   background-color: #FAFBFF;
// `;

// class TopBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: false,
//       id: "",
//       password: "",
//     };
//   }

//   _changeID = function () {
//     const id_v = document.getElementsByName('Id')[0].value;

//     this.setState({
//       id: id_v,
//     });
//   }

//   _changePW = function () {
//     const pw_v = document.getElementsByName("Pwd")[0].value;

//     this.setState({
//       password: pw_v,
//     });
//   }

//   openModal = function () {
//     this.setState({
//       visible: true,
//     });
//   }

//   closeModal = function () {
//     this.setState({
//       visible: false,
//     });
//   }

//   goToJoin = function () {
//     // "/join" 경로를 히스토리에 추가하여 회원가입 페이지로 이동
//     this.props.history.push("/join");
//   };

//   goToJoin = function () {
//     this.props.history.push("/Mypage");
//   }

//   render() {
//     console.log('아이디 : ' + this.state.id + ', 비밀번호 : ' + this.state.password);
//     return (
//       <TopBarWrapper>
//         <Button variant="light" onClick={() => this.openModal()}>login</Button>&nbsp;
//         <Modal
//           visible={this.state.visible}
//           width="400"
//           height="360"
//           effect="fadeInDown"
//           onClickAway={() => this.closeModal()}
//         >
//           <div className="modal_container">
//             <div>
//               <h4 className="login_title">로그인</h4>
//               <span className="close" onClick={() => this.closeModal()}>&times;</span>
//             </div>
//             <div>
//               <p className="no_account">계정이 아직 없으신가요?</p>
//               <Link to="/join">
//                 <Button className="signup" variant="light">회원가입</Button>
//               </Link>
//             </div>
//             <form>
//               <div className="login_div">
//                 <div className="login_input_div">
//                   <input
//                     name="Id"
//                     className="login_id"
//                     type="text"
//                     placeholder="아이디 혹은 이메일 주소"
//                     onChange={() => this._changeID()}
//                   />
//                 </div>

//                 <div className="login_input_div">
//                   <input
//                     name="Pwd"
//                     className="login_pwd"
//                     type="password"
//                     placeholder="비밀번호"
//                     onChange={() => this._changePW()}
//                   />
//                 </div>

//                 <div>
//                   <label>
//                     <input type="checkbox" className="save_id" value="id" />
//                     아이디 저장
//                   </label>
//                   <input type="button" className="find_id_pwd" value="아이디/비밀번호 찾기" />
//                 </div>

//                 <div className="submit_div">
//                   <div><input type="button" value="로그인" /></div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </Modal>
//         <Link to="/mypage">
//           <Button variant="light">mypage</Button>
//         </Link>
//       </TopBarWrapper>
//     );
//   }
// }

// export default TopBar;

// src/components/TopBar.js
