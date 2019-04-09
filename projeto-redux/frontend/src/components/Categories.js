import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Categories extends React.Component {
  render() {
    const {categories, categoryIds} = this.props;
    return (
      <ul className="categories">
        {categoryIds.map(id => {
          const c = categories[id];
          return (
            <li key={c.path}>
              <Link to={`/c/${c.path}`} className="category-link">
                {c.name}
              </Link>
            </li>
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
