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



const ReportMypage = ({content, fref, date}) => { 
  const handleClipboardCopy = () => {
    const textToCopy = content;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('클립보드에 복사되었습니다.');
      })
      .catch((err) => {
        console.error('텍스트 복사 실패:', err);
      });
  };
  
    return(
        <>
            <div className="historyContainer">
              <tr className="theme_tr">
                <td className="theme_td">
                    <ThemeContainer><div className="reportBox">논문</div></ThemeContainer>
                </td>
              </tr>
              <TableContainer>
                <div className="tableBox">
                    <table>
                    <tr className="table_tr">
                <td rowSpan="2" className="first-column table_td"><div className="contentBox" id="Content">{content}</div></td>
              <td colSpan="2" className="second-column table_td">{date}</td>
            </tr>
            <tr className="table_tr">
              <td width={"100px"} style={{ textAlign: 'center' }}>{fref}</td>
              <td>
              <Button className="copy" onClick={handleClipboardCopy}>
                  <img src={copy} width="20px" height="20px"/>
                  </Button>
                </td>
            </tr>
            </table>
            </div>
            </TableContainer>
            </div>
            </>
            );
        }

        export default ReportMypage;

