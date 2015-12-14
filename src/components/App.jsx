import React from 'react';
import { fromJS } from 'immutable';

// const polls = fromJS([
//   {
//     title: 'My Poll',
//     options: ['option 1', 'option 2']
//   }, {
//     title: 'My Other Poll',
//     options: ['answer 1', 'answer 2']
//   }
// ]);

export default React.createClass({

  render: function() {
    return this.props.children;
  }
});
