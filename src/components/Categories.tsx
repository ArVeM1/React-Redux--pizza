import React from 'react';

interface CategoriesProps {
  value: number;
  onChangeCategory: (id: number) => void;
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map((item, id) => (
            <li key={id} className={value === id ? 'active' : ''} onClick={() => onChangeCategory(id)}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});
