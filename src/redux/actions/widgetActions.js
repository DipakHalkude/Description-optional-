export const addWidget = (categoryId, name, content) => {
    return {
      type: 'ADD_WIDGET',
      payload: { categoryId, name, content }
    };
  };
  
  export const removeWidget = (categoryId, widgetId) => {
    return {
      type: 'REMOVE_WIDGET',
      payload: { categoryId, widgetId }
    };
  };
  