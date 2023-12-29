import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mensclothing = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/category/men\'s clothing') // corrected category name
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching women\'s clothing products:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Men's Clothing Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} className="img-fluid" style={{ height: '300px', width: '250px' }} />
          <p>{product.category}</p>
          <p className="font-weight-bold">Price: ${product.price}</p>
          <p className="font-italic">Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Mensclothing;
