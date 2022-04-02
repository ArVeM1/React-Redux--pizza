import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {
  const onSelectItem = (id) => {
    onClickCategory(id)
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, id) => (
            <li
              className={activeCategory === id ? 'active' : ''}
              onClick={() => onSelectItem(id)}
              key={`${name}_${id}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
}

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories
