export function setState(state) {
  return {
    type: 'SET_STATE',
    state: state
  };
}

export function addPoll(poll) {
  return {
    type: 'ADD_POLL',
    poll: poll
  };
}
