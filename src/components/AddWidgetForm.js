import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../redux/actions/widgetActions';

const AddWidgetForm = () => {
  const categories = useSelector(state => state.categories);
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryId && widgetName && widgetContent) {
      dispatch(addWidget(categoryId, widgetName, widgetContent));
      setWidgetName('');
      setWidgetContent('');
      setCategoryId('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-widget-form">
      <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={e => setWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Content"
        value={widgetContent}
        onChange={e => setWidgetContent(e.target.value)}
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
