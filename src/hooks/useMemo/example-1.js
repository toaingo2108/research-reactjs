import React, { useMemo, useState } from "react";

const BasicHookUseMemo1 = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
  };

  console.log('re-render');

  // useMemo hook
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Caculating...");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  // const total = products.reduce((result, prod) => {
  //   console.log("Caculating...");
  //   return result + prod.price;
  // }, 0);

  return (
    <div>
      <input
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicHookUseMemo1;
