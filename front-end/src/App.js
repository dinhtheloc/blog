import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import Home from './views/Home/Home';
import Article from './views/Article/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/article/:slug">
          <Article />
        </Route>

      </Switch>
      <Footer></Footer>
      <Loading></Loading>
    </Router>
  );
}

export default App;
