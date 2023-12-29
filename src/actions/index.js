
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const updateToCart = (productId, newQuantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: {
    productId,
    newQuantity,
  },
});

export const removeFromCart = (removedProductId) => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    removedProductId,
  },
});

export const isLoggedIn = (removedProductId) => ({
  type: 'USERLOGIN',
});

export const userLogout = () => ({
  type: 'USERLOGOUT',
});

export const userCheckout = () => ({
  type: 'USERCHECKOUT',
});

export const userCheckoutCleared = () => ({
  type: 'USERCHECKOUTCLEARED',
});
export const removeAllFromCart = () => ({
  type: "REMOVE_ALL_FROM_CART",
});



export const CLEAR_CART = 'CLEAR_CART';

export const clearCart = () => ({
  type: CLEAR_CART,
});
