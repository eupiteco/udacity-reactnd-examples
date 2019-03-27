import React from 'react';
import {connect} from 'react-redux';
import {formatDate} from '../utils/helpers';

class Post extends React.Component {
  render() {
    const {
      author,
      body,
      category,
      commentCount,
      deleted,
      id,
      timestamp,
      title,
      voteScore,
    } = this.props.post;
    const date = formatDate(timestamp);
    console.log(date);
    return (
      <div className="post" key={id}>
        <div className="votes">
          <button>
            <span className="up" />
          </button>
          <div className="score">{voteScore}</div>
          <button>
            <span className="down" />
          </button>
        </div>
        <div className="content">
          <div className="post-header">
            <h3 className="title">{title}</h3>
            <div className="details">
              <strong className="author">{author}</strong>{' '}
              <span className="date">{date}</span>{' '}
            </div>
          </div>
          <div className="post-body">
            <p>{body}</p>
            <span className="details">
              {commentCount} comments | {category}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({posts}, {postId}) => ({
  post: posts[postId],
});

export default connect(mapStateToProps)(Post);
