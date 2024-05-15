import { useState } from "react";

function Items() {
  const [items, setItems] = useState([]);
  const [count, setCcount] = useState(0);
  console.log(items.length);

  /*   return <>{items}</>; */
}

export default Items;
