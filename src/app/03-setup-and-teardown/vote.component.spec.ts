import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // @ts-ignore
  const component: VoteComponent;

  beforeEach(() => {
    // @ts-ignore
    component = new VoteComponent();
  });

  it('should increment total votes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrease total votes when downvote', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
