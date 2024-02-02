
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions';

<<<<<<< HEAD
=======

// const Jwellery = () => {
//   const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cartReducer.cartItems);




//   const handleAddToCart = (product) => {
//     const isProductInCart = cartItems && cartItems.find((item) => item.id === product.id);
//     console.log('Is product in cart?', isProductInCart);
//     if (isProductInCart) {
//       alert('This item is already in your cart!');
//     } else {
//       dispatch(addToCart(product));
//     }
//   };
  
//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products/category/jewelery') // corrected category name
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching jewelry products:', error);
//       });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Jewellery Products</h2>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//           <img src={product.image} alt={product.title} className="img-fluid" style={{ height: '300px', width: '250px' }} />
//           <p>{product.category}</p>
//           <p className="font-weight-bold">Price: ${product.price}</p>
//           <p className="font-italic">Description: {product.description}</p>
//           <Link to={`/Products/${id}`}>
//                       <button className="btn btn-secondary">View Details</button>
//                     </Link>
//                     <button className="btn btn-secondary m-1" onClick={() => handleAddToCart(post)}>
//                       Add to Cart
//                     </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Jwellery;
// ... (previous imports)

>>>>>>> origin/main
const Jwellery = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
  
    const handleAddToCart = (product) => {
      const isProductInCart = cartItems && cartItems.find((item) => item.id === product.id);
      console.log('Is product in cart?', isProductInCart);
      if (isProductInCart) {
        alert('This item is already in your cart!');
      } else {
        dispatch(addToCart(product));
      }
    };
    
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.error('Error fetching jewelry products:', error);
        });
    }, []);
  
    return (
        <div className="container mt-4">
<<<<<<< HEAD
  <h2>Jwellery Products</h2>
=======
  <h2>Jewellery Products</h2>
>>>>>>> origin/main
  <div className="row">
    {products.map((product) => (
      <div key={product.id} className="col-md-6 mb-4">
        <div className="card">
          <img src={product.image} alt={product.title} className="card-img-top mx-auto d-block" style={{ height: '150px', width: '50%' }} />
          <div className="card-body text-center">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.category}</p>
            <p className="font-weight-bold">Price: ${product.price}</p>
<<<<<<< HEAD
            
=======
            {/* Uncomment the line below if you want to display the description */}
>>>>>>> origin/main
            {/* <p className="font-italic">Description: {product.description}</p> */}
            <Link to={`/Products/${product.id}`} className="btn btn-secondary m-1">
              View Details
            </Link>
            <button className="btn btn-secondary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    );
};

       
  export default Jwellery;
  