import React from 'react';
import { Link } from 'react-router';
// import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ListDivider from 'material-ui/lib/lists/list-divider';

export const Home = React.createClass({
  // mixins: [PureRenderMixin],

  getPolls: function() {
    return this.props.polls || [];
  },

  getTitle: function(poll) {
    return poll.get('title');
  },

  getOptions: function(poll) {
    return poll.get('options');
  },

  render: function() {
    return (
      <div>
        <AppBar title="Awesome Polls" />
        <h1>Polls</h1>
        {this.getPolls().map((poll) => {
          return (
            <div className="poll" key={this.getTitle(poll)}>
              <h3>{this.getTitle(poll)}</h3>
              {this.getOptions(poll).map((option) => {
                return (<h5 key={option}>{option}</h5>);
              })}
            </div>
          );
        })}
        <ul>
          <li><Link to="/poll">Poll</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/results">Results</Link></li>
        </ul>

      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    polls: state.get('polls')
  };
}

export const HomeContainer = connect(mapStateToProps)(Home);
