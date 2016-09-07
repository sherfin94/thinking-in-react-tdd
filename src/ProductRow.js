import React, {Component} from 'react'

function ProductRow(props) {
  return(
    <tr>
      <td> {props.name} </td>
      <td> {props.price} </td>
    </tr>
  )
}

module.exports = ProductRow
