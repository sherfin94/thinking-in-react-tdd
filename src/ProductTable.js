import React from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    }
  }

  render() {
    var rows = [];
    this.state.products.forEach(function(product) {
      rows.push(<ProductRow name = {product.name} price = {product.price} key = {product.name}/>)
    })
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
