import React, {Component} from 'react'

function ProductCategoryRow(props) {
  return(
    <th>
      <td> {props.name} </td>
    </th>
  )
}

module.exports = ProductCategoryRow;
