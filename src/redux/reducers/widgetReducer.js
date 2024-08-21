const initialState = {
    categories: [
      {
        id: 1,
        name: "CSPM Executive Dashboard",
        widgets: [
          { id: 1, name: "Cloud Accounts", content: "User profiles within cloud platforms that grant access to various cloud resources and services." },
          { id: 2, name: "Cloud Account Risk Assessment", content: "Evaluating the security risks associated with cloud accounts to ensure proper protection and compliance." }
        ]
      },
      {
        id: 2,
        name: "CWPP Dashboard",
        widgets: [
          { id: 3, name: "Top 5 Namespace Specific Alerts", content: "Key notifications related to security and performance issues within a specific cloud namespace." }
        ]
      },
      {
        id: 3,
        name: "Registry Scan",
        widgets: [
          { id: 4, name: "Image Risk Assessment", content: "Evaluating container images for vulnerabilities and security issues to ensure safe deployment." },
          { id: 5, name: "Image Security Issues", content: "Security concerns within container images, including vulnerabilities, malware, and insecure configurations." }

          
        ]
      }
    ]
  };
  
  const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WIDGET':
        return {
          ...state,
          categories: state.categories.map(category =>
            category.id === parseInt(action.payload.categoryId)
              ? {
                  ...category,
                  widgets: [
                    ...category.widgets,
                    {
                      id: category.widgets.length + 1,
                      name: action.payload.name,
                      content: action.payload.content
                    }
                  ]
                }
              : category
          )
        };
      case 'REMOVE_WIDGET':
        return {
          ...state,
          categories: state.categories.map(category =>
            category.id === action.payload.categoryId
              ? {
                  ...category,
                  widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
                }
              : category
          )
        };
      default:
        return state;
    }
  };
  
  export default widgetReducer;
  