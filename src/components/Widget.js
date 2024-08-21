import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions/widgetActions';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.content}</p>
      <button onClick={handleRemove} className="remove-widget">✖</button>
    </div>
  );
};

export default Widget;
