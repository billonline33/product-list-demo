import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  render() {
    const search = this.props.location.search;
    const queryParams = new URLSearchParams(search);
    return (
      <div className="App">
        <Route
          path={'/'}
          exact
          component={() => <ProductList queryParams={queryParams} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
