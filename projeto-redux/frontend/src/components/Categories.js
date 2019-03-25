import React from 'react';
import {connect} from 'react-redux';

class Categories extends React.Component {
  render() {
    const {categories, categoryIds} = this.props;
    return (
      <ul className="categories">
        {categoryIds.map(id => {
          const c = categories[id];
          return (
            <li key={c.path} ><a href={c.path} className="category-link">
              {c.name}
            </a></li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({categories}) => ({
  categoryIds: Object.keys(categories),
  categories,
});
export default connect(mapStateToProps)(Categories);
