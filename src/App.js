import React from "react";
import "./style.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks'

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';

const client = new GraphQLClient({
  uri: "https://graphql.myshopify.com/api/2020-04/graphql.json",
  headers: {
    "X-Shopify-Storefront-Access-Token": "dd4d4dc146542ba7763305d71d1b3d38",
  },
  // typeDefs: gql`
  //   enum ProductSortKeys {
  //     TITLE
  //     UPDATED_AT
  //     BEST_SELLING
  //     PRICE
  //   }
  // `,
});

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
