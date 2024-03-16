import React, { useState } from 'react';
import './form.css'


const Form = ({onAddItems}) =>
{
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) =>
  {
    event.preventDefault(); // avoid reloading for every submission

    if(!description) return;  //if no input-value given return empty list

    const newItem = {description,quantity,packed:false,id:Date.now()} //converting our each data as an object
   
    onAddItems(newItem); //onAddItems passed as props from App.js

    //set default after submitting the form

    setDescription("")
    setQuantity(1);
  }

  return (
    <div>
      <form className='form-div' onSubmit={handleSubmit}>
        <h3>What do you want for the trip?😎</h3>

        {/* controlled element */}
        <select value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
          {
            Array.from({length:20}, (_, i)=> i +1).map((num) =>
            (<option value={num}> {num} </option>))
          }
        </select>

        <input  type="text" placeholder='items..' value={description} 
          onChange = { (e) => 
          {
             setDescription(e.target.value);
          }}>
        
         </input>
        
        <button className='form-but' style={{backgroundColor:"#76c7ad"}}>Add</button>
      </form>
    </div>
  )
}

export default Form;