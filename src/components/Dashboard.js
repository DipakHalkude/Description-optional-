import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddWidgetForm from './AddWidgetForm';

const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search Widgets... Example:(Image Risk Assessment)"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      {categories.map(category => (
        <Category key={category.id} category={category} searchTerm={searchTerm} />
      ))}
      <AddWidgetForm />
    </div>
  );
};

export default Dashboard;
