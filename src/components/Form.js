import React, {useState} from "react";

export default function Form({onAddItems}) {

    //Three states
    const [description, setDescription] = useState("");
    const [quantity, setquantity] = useState(1);
    // const [items, setitems] = useState([])
  
    
    // function handleAddItems(item) {
    //   setitems((prevItems)=>[...prevItems, item]);
    // }
  //Spread operator copies array from line 18
  
    function handledescription(e) {
      setDescription(e.target.value);
    };
  
    function handlequantity(e) {
      setquantity(Number(e.target.value));
    };
  
  
    //Activity 8c (handleSubmit function)
    //Creates new object
  
  
    function handleSubmit(e) {
  
      e.preventDefault();
  
      //if the description is empty, don't need to create a new item.
      if (!description) return;
  
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      }
  
      onAddItems(newItem);
  
      //reset the form 
      //set the state variables back to their default value
      setDescription("");
      setquantity(1);
    };
  
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select id="quantity" value={quantity} onChange={handlequantity}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
  
        <input id="description" type="text" value={description} onChange={handledescription}></input>
  
        <button>Add</button>
      </form>
    );
  }