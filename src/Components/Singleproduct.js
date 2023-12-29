import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions';

const ProductDetails = () => {
  const cartItems= useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const navigate=useNavigate()

  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => setProduct(res.data));
  // }, [id]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (Object.keys(res.data).length === 0) {
          
          navigate("/notfound", { replace: true });
        } else {
          
          setProduct(res.data);
        }
      })
      .catch((error) => {
       
        console.error('Error fetching product:', error);
      });
  }, [id]);
  

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, body, price, description, image } = product;

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems && cartItems.find((item) => item.id === product.id);
    console.log('Is product in cart?', isProductInCart);
    if (isProductInCart) {
      alert('This item is already in your cart!');
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="container mt-4">
      <h2>{title}</h2>
      <img src={image} alt={title} className="img-fluid" style={{ height: '300px', width: '250px' }} />
      <p>{body}</p>
      <p className="font-weight-bold">Price: ${price}</p>
      <p className="font-italic">Description: {description}</p>
      <button className="btn btn-secondary m-1"
      onClick={() => handleAddToCart(product)}
      >Add to Cart</button>
    </div>
  );
};

export default ProductDetails;