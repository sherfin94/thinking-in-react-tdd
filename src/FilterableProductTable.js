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
  }

  handleChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
      return(
        <div className = "FilterableProductTable" style={style}>
          <SearchBar filterText = {this.state.filterText} handleChange={this.handleChange.bind(this)}/>
          <ProductTable products = {this.props.products}
            handleChange={this.handleChange.bind(this)}/>
        </div>
      )
  }
}
