import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle((prevTitle) => (prevTitle === 'My List' ? 'New Title' : 'My List'));
  }, []);

  const listItems = useMemo(() => {
    const sortedItems = [5, 3, 1, 10, 9]; 
    if (isDescending) {
      sortedItems.sort((a, b) => b - a); 
    } else {
      sortedItems.sort((a, b) => a - b);
    }
    return sortedItems;
  }, [isDescending]);

  const toggleSortingOrder = useCallback(() => {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} isDescending={isDescending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleSortingOrder}>
        {isDescending ? 'Change to Ascending Order' : 'Change to Descending Order'}
      </Button>
    </div>
  );
}

export default App;
