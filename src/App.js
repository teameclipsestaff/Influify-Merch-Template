import React from "react";
import "./style.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import Header from './components/Header';

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
    </Router>
    </>
  );
}
