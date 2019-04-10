import React from "react"

const VoteControls = ({upVote, downVote, postId, voteScore}) => (
  <div className="votes">
    <button onClick={() => upVote(postId)}>
      <span className="up" />
    </button>
    <div className="score">{voteScore}</div>
    <button onClick={() => downVote(postId)}>
      <span className="down" />
    </button>
  </div>
);

export default VoteControls;
