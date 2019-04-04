import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {generateHash} from '../utils/helpers';
import {handleNewPost} from '../actions/posts';

class NewPost extends React.Component {
  state = {
    title: '',
    body: '',
    category: '',
    toHome: false,
  };

  render() {
    const {title, body, toHome} = this.state;
    const {categories, categoryIds} = this.props;
    if (toHome === true) return <Redirect to="" />;
    return (
      <div>
        <form className="new-post" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={this.handleTitle}
            className="title-input"
          />
          <textarea
            placeholder="Content"
            value={body}
            onChange={this.handleContent}
            className="body-input"
          />
          <select className="category-picker" onChange={this.handleCategory}>
            <option key="none" />
            {categoryIds.map(id => {
              const c = categories[id];
              return <option key={c.path}>{c.name}</option>;
            })}
          </select>
          <button className="btn" type="submit" disabled={!this.isValid()}>
            Submit
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const timestamp = Date.now();
    const id = generateHash();
    const {title, body, category} = this.state;
    const author = this.props.authedUser;
    const newPost = {
      id,
      title,
      body,
      category,
      author,
      timestamp,
    };
    this.props.handleNewPost(newPost);
    this.setState(() => ({
      title: '',
      body: '',
      category: '',
      toHome: true,
    }));
  };

  isValid = () => {
    const {title, body, category} = this.state;
    if (title === '' || body === '' || category === '') return false;
    return true;
  };
  handleTitle = e => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };

  handleContent = e => {
    const body = e.target.value;
    this.setState(() => ({
      body,
    }));
  };

  handleCategory = e => {
    const category = e.target.value;
    this.setState(() => ({
      category,
    }));
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleNewPost: data => dispatch(handleNewPost(data)),
  };
}

function mapStateToProps({categories, flags}) {
  const {authedUser} = flags;
  return {
    authedUser,
    categories,
    categoryIds: Object.keys(categories),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPost);
