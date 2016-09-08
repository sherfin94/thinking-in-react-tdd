import React from 'react';
import SearchBar from '../src/SearchBar';
import renderer from 'react-test-renderer';

describe("Search Bar", () => {
  it("snapshot", () => {
    const component = renderer.create(
      <SearchBar />
    );
    let json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
})


/*

import React from 'react'
import ReactDOM  from 'react-dom'
import ProductTable from '../src/ProductTable'
import ProductRow from '../src/ProductTable'
import {shallow} from 'enzyme'
import TestUtils from 'react-addons-test-utils'
import SearchBar from '../src/SearchBar'

describe("Search Bar", () => {
  it(" takes input and stores it in state variable", () => {
    var searchBar = TestUtils.renderIntoDocument(
      <SearchBar />
    );

    var searchBarNode = searchBar.refs.filterInput;
    searchBarNode.value = "hello";

    TestUtils.Simulate.change(searchBarNode);

    console.log(searchBar);
  });
})

*/
