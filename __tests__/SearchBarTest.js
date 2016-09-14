import React from 'react';
import SearchBar from '../src/SearchBar';
import renderer from 'react-test-renderer';
//import { mount } from 'enzyme';

describe("Search Bar", () => {
  it("snapshot", () => {
    const component = renderer.create(
      <SearchBar />
    );
    let json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it(" handles onChange event", function() {
    
  })
})
