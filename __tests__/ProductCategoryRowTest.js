import React from 'react';
import ProductCategoryRow from '../src/ProductCategoryRow';
import renderer from 'react-test-renderer';

describe("Product category row", function() {

  it(' matches snapshot ', () => {
    const component = renderer.create(
      <ProductCategoryRow name = "Electronics" />
    );
    let json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
