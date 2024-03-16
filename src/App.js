
import { useState } from 'react';
import './App.css';
import Footer from './footer';
import Form from './form';
import Header from './header';
import List from './list';

function App() {
  // lifting up the state- this state can be used by the sibiling components(form, list & footer)
  const [items,setItems] = useState([])

  const [checkedCount, setCheckedCount] = useState(0);
   
  const handleCheckbox = (id) =>
    {
        const checkItems = items.map ((v,i) => 
        v.id === id ? {...v, packed : ! v.packed} : v)
        setItems(checkItems)
    }

  //checked count for Form component used to update the % if packed items
  const handleCheckCount = (id) => {
    setCheckedCount((count) => (!items.packed ? count + 1 : count - 1));

  };

  //use Spread operator to handle exising items in the list, new items will be added one by one
  const handleAddItmes =(item) =>
  {
    setItems((items) => [...items,item])
  }

   const handleDeleteItems = (id) => 
   {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
   };
  
   
   // {To CLEAR the existing items from the list- 1.create a function and get Derived state 2. pass the fun as props}
   const handleClearItems = (item) => 
   {
    if(window.confirm("Are you sure you want to delete all the items"))
    {
      setItems((items) => [])
    }

   }
  return (
    <div className="App">
      <Header/>
      <Form onAddItems={handleAddItmes}/>
      <List item={items} handleCheckbox={handleCheckbox} clearList={handleClearItems} deleteItems={handleDeleteItems}/>    
      <Footer item={items} checkedCount ={checkedCount} handleCheckCount={handleCheckCount}/>
    </div>
  );
}

export default App;
