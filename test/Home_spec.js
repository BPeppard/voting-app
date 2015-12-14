import React from 'react';
import { renderIntoDocument, scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';
import { fromJS } from 'immutable';
import { Home } from '../src/components/Home';
import { expect } from 'chai';

describe('Home Page', () => {
  it('renders polls', () => {
    const polls = fromJS([
      {
        title: 'My Poll',
        options: ['option 1', 'option 2']
      }, {
        title: 'My Other Poll',
        options: ['answer 1', 'answer 2']
      }
    ]);
    const component = renderIntoDocument(
      <Home polls={polls} />
    );
    const entries = scryRenderedDOMComponentsWithClass(component, 'poll');
    console.log('entries: ' + entries);
    console.log('entries[0]: ' + entries[0].textContent);
    console.log('test');

    expect(entries.length).to.equal(2);
  });
});
