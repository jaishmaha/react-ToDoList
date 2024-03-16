import { useState } from 'react';
import './list.css'

const List = ({item,handleCheckbox,clearList,deleteItems}) =>
 {

    const [sortOption,setSortOption]= useState(null)
    //Sort Items
   const handleSort = (e) => {
    setSortOption(e)
   }
   const sortedlist=()=>
   {
    let sortedItem=[...item]
    
    switch(sortOption)
    {
        case 'SORT BY INPUT':
            return sortedItem
        case 'SORT BY DESCRIPTION':
            sortedItem.sort((a,b)=> a.description.localeCompare(b.description))
            break;
        case 'SORT BY PACKED':
            sortedItem.sort((a,b) => a.packed-b.packed)
            break;
        default:
            break;
    }
    return sortedItem
   }
   return (
    <div className='list'>
        <ul>
        {   sortedlist().map((items) =>
            (<Items item = {items} key={item.id} handleSort={handleSort}handleCheckbox={handleCheckbox} deleteItems={deleteItems}/>))
        }
        </ul>

        <select onChange={(e)=>handleSort(e.target.value)}>
            <option> SORT BY INPUT</option>
            <option> SORT BY DESCRIPTION</option>
            <option> SORT BY PACKED</option>
        </select>
        <br></br>
        <button className='clear-but' onClick={clearList}>Clear List</button>
    </div>
  )
}

const Items =({item,handleSort,handleCheckbox,deleteItems}) =>
{
    return (
        <div>
            <li key={item.id}>
                <input type='checkbox' checked={item.packed} onChange={() =>handleCheckbox(item.id)}></input>
                <span className={item.packed ? "textdecor" : " "}>{item.quantity} {item.description}</span>
                        
                <button className='list-but' item= {item.id} onClick={()=>deleteItems(item.id)}>&times;</button>

            </li>
        </div>
    )
}

export default List;