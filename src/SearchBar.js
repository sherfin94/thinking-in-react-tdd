import React, {Component} from 'react'

export default class SearchBar extends Component {
  handleChange() {
    this.props.handleChange(this.refs.filterTextInput.value);
  }
  render() {
    return(
      <form>
        <input type = "textbox" ref='filterTextInput' onChange={this.handleChange.bind(this)} value={this.props.filterText} />
      </form>
    )
  }
}
