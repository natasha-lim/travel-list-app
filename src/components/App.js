import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo";
import Form from "./Form";
import Item from "./Item";
import Stats from "./Stats";
import PackingList from "./PackingList";

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];


function App() {
  const [items, setitems] = useState([]);

  function handleAddItems(item) {
    setitems((prevItems)=>[...prevItems, item]);
  }

  //Activity 10a
  //filter --> Javascript function that 
  //Display remaining items from array EXCEPT for the item that has been clicked
  //The filter basically just filters the condition
  function handleDeleteItem(id) {
    setitems((prevItems)=>prevItems.filter((item) => item.id !== id));
  };

  //Activity 11a: creating the update function
  //Call back the prevItems (much like the other two functions) --> setItems takes in the callback
  //Use .map() for this case --> takes in another callback function in this case for each item
  //if the item.id is equal to the id that I have clicked, the id is whatever I had clicked
  //the spread operator will copy the entire array object first
  //
  function handleUpdateItem(id){
    setitems((prevItems) => prevItems.map((item) => 
    item.id === id ? {...item, packed: !item.packed} : item
    ));
  };


  //onDeleteItem --> passes the defined handleDeleteItem function created earlier
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList 
      items={items}
      onDeleteItem ={handleDeleteItem}
      onUpdateItem={handleUpdateItem}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
