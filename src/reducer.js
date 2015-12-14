import { List, Map } from 'immutable';

const defaultState = new Map();

function setState(state, newState) {
  return state.merge(newState);
}

function addPoll(state, poll) {
  console.log('adding poll');
  return state.updateIn(['polls'], new List(), (polls) => {
    return polls.push(poll);
  });
}


export default function(state = defaultState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'ADD_POLL':
      return addPoll(state, action.poll);
    default:
      return state;
  }
  return state;
}

export function setPolls(state, polls) {
  return state.set('polls', polls);
}

export function deletePoll(state, id) {
  const index = state.get('polls').indexOf(id);
  return state.deleteIn(['polls', index]);
}


export function addOption(state, poll, option) {
  const index = state.get('polls').indexOf(poll);
  return state.updateIn(['polls', index], (p) => {
    return p.updateIn(['options'], new List(), (options) => {
      return options.push(option);
    });
  });
}
