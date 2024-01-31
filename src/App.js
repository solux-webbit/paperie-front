// src\App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 임포트
import HomePage from "./pages/HomePage.js"
import Join from "./pages/Join.js";
import ArticlePage from "./pages/ArticlePage.js";
import BookPage from "./pages/BookPage.js";
import LawPage from "./pages/LawPage.js";
import HelpPage from "./pages/HelpPage.js";
import Mypage from "./pages/Mypage.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/book" component={BookPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/law" component={LawPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/join" component={Join} />
          <Route path="/mypage" component={Mypage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
