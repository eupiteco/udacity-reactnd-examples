import React from 'react';

const Comments = ({comments}) => (
  <div className="comment-list">
    {comments.map(c => {
      const {author, body, voteScore, timeStamp} = c;
      return (
        <div className="comment">
          {author}
          {body}
          {voteScore}
          {timeStamp}
        </div>
      );
    })}
  </div>
);

export default Comments;
