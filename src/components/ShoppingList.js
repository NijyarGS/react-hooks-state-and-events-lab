import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [selectedCategory,setSelectedCategory] = useState('All')

  function handleCatagory(event)
  {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCatagory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          if (selectedCategory == "All")
          {
            return (
              <Item key={item.id} name={item.name} category={item.category} />
              )
          }
          else if (item.category == selectedCategory)
          {
            return (
              <Item key={item.id} name={item.name} category={item.category} />
              )
            }
            
          }
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
