import React from 'react';
import {connect} from 'react-redux';

class Categories extends React.Component {
  render() {
    const {categories, categoryIds} = this.props;
    return (
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categoryIds.map(id => {
            const c = categories[id];
            return <li key={c.path}>{c.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({categories}) => ({
  categoryIds: Object.keys(categories),
  categories,
});
export default connect(mapStateToProps)(Categories);
