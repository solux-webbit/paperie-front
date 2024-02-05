// src/components/LoginModal.js
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-awesome-modal';
import { Link } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

const LoginModal = ({ visible, closeModal, changeID, changePW, handleLogin, isLoggedIn }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPwd, setCheckPwd] = useState(false);

  const handleLoginClick = async () => {
      try {
        const res = await axios.post("http://127.0.0.1:8000/accounts/login/", {
          username: username,
          password: password,
        });
  
        const user = res.data;
        const jwtToken = user.token;
        const { result, errorCause } = res.data;
  
        // 토큰 저장
        localStorage.setItem("userToken", jwtToken);
          
        // 틀린 이메일, 비밀번호 걸러주기
        if (!result) {
          if (errorCause === "email") {
            setCheckEmail(false);
          } else if (errorCause === "password") {
            setCheckPwd(false);
            }
          } else {
            setCheckEmail(true);
            setCheckPwd(true);
          }
  
        // 로그인 성공 시 상태를 업데이트하고 모달을 닫음
        this.setState({
          isLoggedIn: true,
          isModalVisible: false,
        });
  
        console.log(res.data);
      } catch (error) {
        // 로그인 실패한 경우에 대한 처리
        console.error("로그인 실패:", error);
      }
  /* handleLogout = () => {
    // 로그아웃 처리 로직 추가

    // 로그아웃 후 상태를 업데이트하여 다시 로그인 버튼으로 변경
    this.setState({
      isLoggedIn: false,
    });
  };
    closeModal(); //로그인 후 모달 닫기
    /* try{
    const response = await axios.post("http://127.0.0.1:8000/accounts/api/token/", {
        username, 
        password, 
      });
      // 로그인이 성공한 경우에 대한 처리
      console.log(response.data);
    } catch (error) {
      // 로그인이 실패한 경우에 대한 처리
      console.error("로그인 실패:", error);
    } */ 
  }; 

  return (
    <Modal
      visible={visible}
      width="400"
      height="360"
      effect="fadeInDown"
      onClickAway={closeModal}
    >
      <div className="modal_container">
        <div>
          <h4 className="login_title">로그인</h4>
          <span className="close" onClick={closeModal}>&times;</span>
        </div>
        <div>
          <p className="no_account">계정이 아직 없으신가요?</p>
          <Link to="/join">
            <Button className="signup" variant="light">회원가입</Button>
          </Link>
        </div>
        <form>
          <div className="login_div">
            <div className="login_input_div">
              <input
                name="Id"
                className="login_id"
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="login_input_div">
              <input
                name="Pwd"
                className="login_pwd"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label>
                <input type="checkbox" className="save_id" value="id" />
                아이디 저장
              </label>
              <input type="button" className="find_id_pwd" value="아이디/비밀번호 찾기" />
            </div>

            <div className="submit_div">
              <div><input type="button" value="로그인" onClick={handleLoginClick}/></div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
