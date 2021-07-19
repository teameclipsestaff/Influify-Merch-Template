import React from "react";
import "./style.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}
