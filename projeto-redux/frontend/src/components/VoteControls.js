import React from "react"

const VoteControls = ({upVote, downVote, id, voteScore}) => (
  <div className="votes">
    <button onClick={() => upVote(id)}>
      <span className="up" />
    </button>
    <div className="score">{voteScore}</div>
    <button onClick={() => downVote(id)}>
      <span className="down" />
    </button>
  </div>
);

export default VoteControls;
