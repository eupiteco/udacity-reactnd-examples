import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {generateHash} from '../utils/helpers';
import {handleNewComment} from '../actions/comments';

class NewComment extends React.Component {
  state = {
    body: '',
  };
  render() {
    return (
      <div className="new-comment">
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Submit a new Comment"
            className="body-input"
            value={this.state.body}
            onChange={this.handleBody}
          />
          <div className="buttons">
            <button className="btn btn-cancel">Cancel</button>
            <button className="btn btn-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleBody = e => {
    const body = e.target.value;
    this.setState(() => ({
      body,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = generateHash();
    const timestamp = Date.now();
    const {author, parentId, sendComment} = this.props;
    const {body} = this.state;
    sendComment({id, timestamp, author, body, parentId});
    this.setState(() => ({body: ''}));
  };
}

const mapStateToProps = ({ flags}, { match, id }) => ({
	author: flags.authedUser,
	parentId: match.params.id,
	id,
})

const mapDispatchToProps = dispatch => ({
  sendComment: data => dispatch(handleNewComment(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NewComment),
);
