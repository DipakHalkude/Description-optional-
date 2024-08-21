import React from 'react';
import Widget from './Widget';

const Category = ({ category, searchTerm }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widget-list">
        {category.widgets
          .filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(widget => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
          ))}
      </div>
    </div>
  );
};

export default Category;
