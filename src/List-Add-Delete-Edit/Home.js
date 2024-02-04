// react
// Create a component ProductList to list availble products on the screen.
// Have add button to add products to list. Have another child component
// called ProductCard to display product, count and its price.
// In the card, have edit button to update product list  and delete
// button to remove a product from list.


import React, { useState } from "react";
import ProductCard from "./ProductCard";

const dataSet = [
  {
    name: "pencil",
    count: 2,
    price: 10,
  },
  {
    name: "pen",
    count: 10,
    price: 20,
  },
  {
    name: "marker",
    count: 5,
    price: 30,
  },
  {
    name: "Eraser",
    count: 5,
    price: 30,
  },
];

export default function App() {
  const [data, setData] = useState(dataSet);
  const [productName, setProductName] = useState("");
  const [productCount, seProductCount] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [updateItem, setUpdateItem] = useState("");

  const Add = () => {
    if (updateItem) {
      let app = data.map((item) => {
        if (item.name.toLowerCase() === updateItem.toLowerCase()) {
          return {
            ...item,
            name: productName,
            count: productCount,
            price: productPrice,
          };
        }
        return item;
      });
      setData(app);
      setUpdateItem("");
    }
    else {
      setData([
        ...data,
        { name: productName, count: productCount, price: productPrice },
      ]);
    }
  };

  const nameSet = (e) => {
    console.log(e.target.value);
    setProductName(e.target.value);
  };

  const deleteProduct = (name) => {
    setData(data.filter((prod) => prod.name !== name));
  };

  const updateProduct = (item) => {
    setUpdateItem(item.name);
    setProductName(item.name);
    seProductCount(item.count);
    setProductPrice(item.price);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" value={productName} onChange={nameSet} />
      <input
        type="number"
        value={productCount}
        onChange={(e) => seProductCount(e.target.value)}
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="productname"
      />
      <button onClick={Add}>{updateItem ? "Update Item" : "Add Item"}</button>
      <ul>
        {data.map((item) => (
          <ProductCard
            item={item}
            deleteProd={deleteProduct}
            updateProd={updateProduct}
          />
        ))} 
      </ul>
    </div>
  );
}

