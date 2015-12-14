import { fromJS } from 'immutable';
import { expect } from 'chai';

describe('learning tests', () => {
  it('should append using merge', () => {
    const state = fromJS({
      polls: ['a', 'b', 'c']
    });
    const nextState = state.updateIn(['polls'], (polls) => {
      return polls.push('d');
    });

    expect(nextState).to.equal(fromJS({
      polls: ['a', 'b', 'c', 'd']
    }));
  });
});
