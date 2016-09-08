import React from 'react'
import ReactDOM  from 'react-dom'
import ProductTable from '../src/ProductTable'
import ProductRow from '../src/ProductTable'
import {shallow} from 'enzyme'
import TestUtils from 'react-addons-test-utils'

describe("Product Table", function() {
  it("renders single product", function() {
    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    ];

    var productTable = TestUtils.renderIntoDocument(
      <ProductTable products = {PRODUCTS} />
    );

  expect(
      ReactDOM
      .findDOMNode(productTable)
      .textContent
    ).toContain(' Football  $49.99 ')
  });

  it("renders multiple products", function() {
    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Electronics', price: '$10.99', stocked: true, name: 'Light-Bulb'}
    ];

    var productTable = TestUtils.renderIntoDocument(
      <ProductTable products = {PRODUCTS} />
    );

  expect(
      ReactDOM
      .findDOMNode(productTable)
      .textContent
    ).toContain(' Football  $49.99 ');

    expect(
        ReactDOM
        .findDOMNode(productTable)
        .textContent
      ).toContain(' Light-Bulb  $10.99 ');
  });

  it("displays categories", function() {

    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Electronics', price: '$10.99', stocked: true, name: 'Light-Bulb'}
    ];

    var productTable = TestUtils.renderIntoDocument(
      <ProductTable products = {PRODUCTS} />
    );
  console.log(ReactDOM
  .findDOMNode(productTable)
  .textContent);

  expect(
      ReactDOM
      .findDOMNode(productTable)
      .textContent
    ).toContain(' Electronics ')

  });
});
