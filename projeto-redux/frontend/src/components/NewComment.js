import React from 'react';
import {connect} from 'react-redux';
import {generateHash} from '../utils/helpers';

class NewComment extends React.Component {
  render() {
    return (
      <div className="new-comment">
        <form>
          <textarea
            placeholder="Submit a new Comment"
            className="body-input"
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
}

export default connect()(NewComment);
