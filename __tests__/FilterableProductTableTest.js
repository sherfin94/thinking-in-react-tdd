import React from 'react'
import FilterableProductTable from '../src/FilterableProductTable'
describe("FilterableProductTable", () => {
  it("FilterableProductTable#filteredProducts", () => {
    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Electronics', price: '$10.99', stocked: true, name: 'Light-Bulb'}
    ];

    var fpTable = new FilterableProductTable(
      {products:PRODUCTS}
    );

    expect(fpTable.filteredProducts('ball')).toEqual([
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}
    ]);
  });
});
