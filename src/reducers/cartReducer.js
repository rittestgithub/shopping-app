const initialState = {
  cartItems: [],
  isAuthenticated:false,
  isCheckout:false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
     
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case 'UPDATE_QUANTITY':
      const { productId, newQuantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        ),
      };

    case 'REMOVE_FROM_CART':
      const { removedProductId } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== removedProductId),
      };

      case 'USERLOGIN':
        return {
          ...state,
          isAuthenticated: true,
        };

        case 'USERLOGOUT':
        return {
          ...state,
          isAuthenticated: false,
        };
        case 'USERCHECKOUT':
          return {
            ...state,
            isCheckout:true,
          };
          case 'USERCHECKOUTCLEARED':
          return {
            ...state,
            isCheckout:true,
          };
          case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
