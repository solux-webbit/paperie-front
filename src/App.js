import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 임포트
import HomePage from "./pages/HomePage.js"
import JoinPage from "./pages/JoinPage.js";
import ArticlePage from "./pages/ArticlePage.js";
import BookPage from "./pages/BookPage.js";
import HelpPage from "./pages/HelpPage.js";
import Mypage from "./pages/Mypage.js";

class App extends React.Component {
  state = {
    screenHeight: window.innerHeight,
    screenWidth: window.innerWidth,
  };

  updateDimensions = () => {
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { screenHeight, screenWidth } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage screenHeight={screenHeight} screenWidth={screenWidth} />
            )}
          />
          <Route
            path="/book"
            render={() => (
              <BookPage screenHeight={screenHeight} screenWidth={screenWidth} />
            )}
          />
          <Route
            path="/article"
            render={() => (
              <ArticlePage screenHeight={screenHeight} screenWidth={screenWidth} />
            )}
          />
          <Route
            path="/help"
            render={() => (
              <HelpPage screenHeight={screenHeight} screenWidth={screenWidth} />
            )}
          />
          <Route
            path="/join"
            render={() => (
              <JoinPage screenHeight={screenHeight} screenWidth={screenWidth} />
            )}
          />
          <Route
            path="/mypage"
            render={() => (
              <Mypage screenHeight={screenHeight} screenWidth={screenWidth} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
