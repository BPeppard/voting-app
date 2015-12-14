import { fromJS } from 'immutable';
import { expect } from 'chai';

import { setPolls, deletePoll, createPoll, addOption } from '../src/reducer';

describe('application logic', () => {
  describe('setPolls', () => {
    it('adds polls to the state', () => {
      const state = fromJS({});
      const polls = fromJS(['Poll 1', 'Poll 2']);
      const nextState = setPolls(state, polls);
      expect(nextState).to.equal(fromJS({
        polls: ['Poll 1', 'Poll 2']
      }));
    });
  });

  describe('deletePoll', () => {
    it('Deletes a poll from polls', () => {
      const state = fromJS({
        polls: ['Poll 1', 'Poll 2', 'Poll 3']
      });
      const id = 'Poll 2';
      const nextState = deletePoll(state, id);
      expect(nextState).to.equal(fromJS({
        polls: ['Poll 1', 'Poll 3']
      }));
    });
  });

  describe('addPoll', () => {
    it('takes a poll and adds it to an empty polls', () => {
      const state = fromJS({});
      const poll = fromJS({
        title: 'My Poll',
        options: ['option 1', 'option 2']
      });
      const nextState = createPoll(state, poll);
      expect(nextState).to.equal(fromJS({
        polls: [
          {
            title: 'My Poll',
            options: ['option 1', 'option 2']
          }
        ]
      }));
    });
    it('takes a poll and adds it to polls', () => {
      const state = fromJS({
        polls: [{
          title: 'My Poll',
          options: ['option 1', 'option 2']
        }]
      });
      const poll = fromJS({
        title: 'My Other Poll',
        options: ['answer 1', 'answer 2']
      });
      const nextState = createPoll(state, poll);
      expect(nextState).to.equal(fromJS({
        polls: [
          {
            title: 'My Poll',
            options: ['option 1', 'option 2']
          }, {
            title: 'My Other Poll',
            options: ['answer 1', 'answer 2']
          }
        ]
      }));
    });
  });

  describe('addOption', () => {
    it('should add an option to an already existing poll', () => {
      const state = fromJS({
        polls: [{
          title: 'My Poll',
          options: ['option 1', 'option 2']
        }, {
          title: 'My Other Poll',
          options: ['answer 1', 'answer 2']
        }]
      });
      const poll = fromJS({
        title: 'My Poll',
        options: ['option 1', 'option 2']
      });
      const option = 'option 3';
      const newState = addOption(state, poll, option);
      expect(newState).to.equal(fromJS({
        polls: [{
          title: 'My Poll',
          options: ['option 1', 'option 2', 'option 3']
        }, {
          title: 'My Other Poll',
          options: ['answer 1', 'answer 2']
        }]
      }));
    });
  });
});
