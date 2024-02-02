import React from "react";
import "../pages/mypage.css";
import {Button} from 'react-bootstrap';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import copy from "../assets/copy_img.png";

const ThemeContainer = styled.div`
  width: 100px;
  height:100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const TableContainer = styled.div`
  display: flex;
`;
const handleLink = () => {
//링크버튼 처리
}

const handleCopy = (text) => {
  try {
    navigator.clipboard.writeText(text);
    alert('클립보드에 복사되었습니다.');
  } catch (e) {
    alert('클립보드 복사에 실패하였습니다');
  }
}


const BookMypage = () => { 
    return(
        <>
            <div className="historyContainer">
              <tr className="theme_tr">
                <td className="theme_td">
                    <ThemeContainer><div className="bookBox">책</div></ThemeContainer>
                </td>
              </tr>
              <TableContainer>
                <div className="tableBox">
                    <table>
                    <tr className="table_tr">
                <td colspan="3" className="first-column table_td"></td>
              <td className="second-column table_td">2024-02-02</td>
            </tr>
            <tr className="table_tr">
              <td width="70px">Ref.</td>
              <td id="Result" className="first-column table_td">
                <div className="contentBox">dddddd</div>
                </td>
              <td>
              <Button className="copy" onClick={() => handleCopy(document.getElementById("Result").innerHTML)}>
                  <img src={copy} width="20px" height="20px"/>
                  </Button>
                </td>
              <td><Button className="bookLinkButton" onClick={handleLink}>링크</Button></td>
            </tr>
            </table>
            </div>
            </TableContainer>
            </div>
            </>
            );
        }

        export default BookMypage;