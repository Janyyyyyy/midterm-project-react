import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/InventorySystem';
import AddItem from './components/AddItem';
import RemoveItem from './components/RemoveItem';
import UpdateItem from './components/UpdateItem';
import DisplayItems from './components/DisplayAllItems';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import DisplayLowStock from './components/DisplayLowStock';
import DisplayItemsByCategory from './components/DisplayItemsByCategory';
import './App.css';

const App = () => {
  const [itemList, setItemList] = useState([]);

  const handleAddItem = (newItem) => setItemList(prevItems => [...prevItems, newItem]);

  const handleRemoveItem = (id) => {
    const itemFound = itemList.find(item => item.id === id);
    if (itemFound) {
      setItemList(prevItems => prevItems.filter(item => item.id !== id));
      return true;
    }
    return false;
  };

  const handleUpdateItem = (id, field, newValue) => {
    const index = itemList.findIndex(item => item.id === id);
    if (index !== -1) {
      const updatedList = [...itemList];
      updatedList[index][field] = parseFloat(newValue);
      setItemList(updatedList);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-item" element={<AddItem addItem={handleAddItem} items={itemList} />} />
          <Route path="/remove-item" element={<RemoveItem removeItem={handleRemoveItem} />} />
          <Route path="/update-item" element={<UpdateItem updateItem={handleUpdateItem} />} />
          <Route path="/display-all-items" element={<DisplayItems items={itemList} />} />
          <Route path="/display-items-category" element={<DisplayItemsByCategory items={itemList} />} />
          <Route path="/search-item" element={<SearchItem items={itemList} />} />
          <Route path="/sort-items" element={<SortItems items={itemList} />} />
          <Route path="/low-stock-items" element={<DisplayLowStock items={itemList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;