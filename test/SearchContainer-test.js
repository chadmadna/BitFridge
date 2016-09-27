import {mock} from 'simple-mock'
import {mount, shallow} from 'enzyme'
import {assert} from 'chai'
import React from 'react'
import SearchContainer from '../app/containers/SearchContainer'
import SuggestionsList from '../app/components/SuggestionsList'
import SearchBar from '../app/components/SearchBar'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('SearchContainer', function() {
  it('should have a SearchBar', function() {
    var wrapper = shallow(<SearchContainer />)
    assert.equal(wrapper.find(SearchBar).length, 1)
  })
  it('should have a SuggestionsList', function() {
    var wrapper = shallow(<SearchContainer />)
    assert.equal(wrapper.find(SuggestionsList).length, 1)
  })
})
describe('SearchBar', function() {
  it('should have an input form', function() {
    var wrapper = shallow(<SearchBar />)
    assert.equal(wrapper.find('input').length, 1)
  })
})