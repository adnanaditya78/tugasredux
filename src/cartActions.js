// cartActions.js
 
  export const incrementAmount = itemId => ({
    type: 'INCREMENT_AMOUNT',
    payload: { itemId },
  });
  
  export const decrementAmount = itemId => ({
    type: 'DECREMENT_AMOUNT',
    payload: { itemId },
  });
  
  export const removeFromCart = itemId => ({
    type: 'REMOVE_FROM_CART',
    payload: { itemId },
  });
  