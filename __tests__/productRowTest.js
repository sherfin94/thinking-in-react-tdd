import React from 'react';
import ProductRow from '../src/ProductRow';
import renderer from 'react-test-renderer';

describe("Product row", function() {

  it(' matches snapshot ', () => {
    const component = renderer.create(
      <ProductRow name = "FootBall" price = "50" />
    );
    let json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
