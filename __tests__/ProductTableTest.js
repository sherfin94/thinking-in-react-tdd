import React from 'react'
import ReactDOM  from 'react-dom'
import ProductTable from '../src/ProductTable'
import ProductRow from '../src/ProductTable'
import {shallow} from 'enzyme'
import TestUtils from 'react-addons-test-utils'

describe("", function() {
  it("contains spec with an expectation", function() {
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
    ).toEqual(' Football  $49.99 ')
  });
});
