import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './ProductTable'
import SearchBar from'./SearchBar'
import FilterableProductTable from './FilterableProductTable'

class App extends Component {
  render() {
    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Electronics', price: '$10.99', stocked: true, name: 'Light-Bulb'}
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

export default App;
