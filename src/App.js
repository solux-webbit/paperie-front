// src/App.js

import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 임포트
import Home from "./pages/Home.js"
import Join from "./pages/Join.js";
import ArticlePage from "./pages/ArticlePage.js";
import BookPage from "./pages/BookPage.js";
import LawPage from "./pages/LawPage.js";
import HelpPage from "./pages/HelpPage.js";

// const SidebarContainer = styled.div`
//   width: 20%;
//   background-color: purple;
// `;



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
            {/*
              <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mylist" component={MyList} />
             추가적인 Route들을 필요에 따라 설정
            </Switch> */}
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/join" component={Join} />
            <Route path="/book" component={BookPage} />
            <Route path="/article" component={ArticlePage} />
            <Route path="/law" component={LawPage} />
            <Route path="/help" component={HelpPage} />
            </Switch>
          
      </BrowserRouter>
    );
  }
}

export default App;
