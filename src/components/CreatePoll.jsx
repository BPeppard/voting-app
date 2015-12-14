import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import * as actionCreators from '../action_creators';

export const CreatePoll = React.createClass({
  // mixins: [History],
  createPoll: function() {
    console.log('Creating Poll: ');
    console.log(this.refs.title.getValue());
    const title = this.refs.title.getValue();
    const option1 = this.refs.option1.getValue();
    const option2 = this.refs.option2.getValue();
    const poll = new Map({
      'title': title,
      'options': [
        option1,
        option2
      ]
    });
    this.props.addPoll(poll);
    this.props.history.pushState(null, '/');
  },

  render: function() {
    return (
      <div>
        <AppBar title="Awesome Polls" />
        <h1>Create Poll</h1>
        <TextField
          ref="title"
          floatingLabelText="Name of Poll"
          multiLine />
        <br />
        <TextField ref="option1"
          floatingLabelText="Option 1"
          multiLine />
        <br />
        <TextField ref="option2"
          floatingLabelText="Option 2"
          multiLine />
        <br />

      {/* <RaisedButton label="Add Another Option" /> */}
      <br />
      <RaisedButton label="Create Poll" primary onClick={this.createPoll} />

      </div>
    );
  }

});

function mapStateToProps(state) {
  return {
    polls: state.get('polls')
  };
}

export const CreatePollContainer = connect(mapStateToProps, actionCreators)(CreatePoll);
