import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import queryString from 'query-string';

export class App extends Component {
  render() {
    const search = this.props.location.search;
    // change URLSearchParams to queryString because
    // create-react-app has Jest v.20 but this version does`t support
    // URLSearchParams, only Jest 22 supports it.
    // but to install Jest 22 i would have to eject create-react-app

    return (
      <div className="App">
        <Route
          path={'/'}
          exact
          component={() => (
            <ProductList queryParams={queryString.parse(search)} />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
