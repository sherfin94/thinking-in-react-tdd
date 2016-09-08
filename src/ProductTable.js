import React from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    }
  }

  render() {
    var rows = [];
    var lastCategory = "";
    this.state.products.forEach(function(product) {
      if(product.category != lastCategory) {
        rows.push(<ProductCategoryRow name = {product.category} key = {product.name + product.category}/>)
      }
      rows.push(<ProductRow name = {product.name} price = {product.price} key = {product.name}/>)
    });
    return (
      <table>
      <thead>
      </thead>
      <tbody>
        {rows}
        </tbody>
      </table>
    )
  }
}
