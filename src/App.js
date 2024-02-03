// src\App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 임포트
import HomePage from "./pages/HomePage.js"
import JoinPage from "./pages/JoinPage.js";
import ArticlePage from "./pages/ArticlePage.js";
import BookPage from "./pages/BookPage.js";
import LawPage from "./pages/LawPage.js";
import HelpPage from "./pages/HelpPage.js";
import Mypage from "./pages/Mypage.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/book" component={BookPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/law" component={LawPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/join" component={JoinPage} />
          <Route path="/mypage" component={Mypage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
