import React,{useState} from "react";

function Item({ name, category }) {
  
  const [cart,setCart] = useState(false)

  function handleCart(){
    setCart((cart)=>!cart)
  }

  let cartClass = cart ? 'in-cart': null
  let addClass = cart ? "remove" : 'add'
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addClass} onClick={handleCart}>{ cart ? 'Remove from Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
