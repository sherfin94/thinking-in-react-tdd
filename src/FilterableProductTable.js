import React, {Component} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

var style = {
  'float': 'left'
}

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
    this.filteredProducts = this.filteredProducts.bind(this);
  }

  handleChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  filteredProducts(filterText) {
    var filteredProductArray = [];
    this.props.products.forEach( (product) => {
      if(product.name.indexOf(filterText) != -1) {
        filteredProductArray.push(product)
      }
    });
    console.log(filteredProductArray);
    return filteredProductArray;
  }

  render() {
      return(
        <div className = "FilterableProductTable" style={style}>
          <SearchBar filterText = {this.state.filterText} handleChange={this.handleChange.bind(this)}/>
          <ProductTable products = {this.filteredProducts(this.state.filterText)}
            handleChange={this.handleChange.bind(this)}/>
        </div>
      )
  }
}
