// cartReducer.js
const initialState = {
    cartItems: [{
        id: 'rec1JZlfCIBOPdcT2',
        title: 'Samsung Galaxy S8',
        price: '399.99',
        img: 'https://images2.imgbox.com/c2/14/zedmXgs6_o.png',
        amount: 1,
      },
      {
        id: 'recB6qcHPxb62YJ75',
        title: 'google pixel',
        price: '499.99',
        img: 'https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png',
        amount: 1,
      },
      {
        id: 'recdRxBsE14Rr2VuJ',
        title: 'Xiaomi Redmi Note 2',
        price: '699.99',
        img: 'https://images2.imgbox.com/4f/3d/WN3GvciF_o.png',
        amount: 1,
      },
      {
        id: 'recwTo160XST3PIoW',
        title: 'Samsung Galaxy S7',
        price: '599.99 ',
        img: 'https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png',
        amount: 1,
      }], // array untuk menyimpan item-item dalam keranjang belanja
    totalPrice: 2199.96, // total harga keseluruhan dari semua barang dalam keranjang belanja
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_AMOUNT':
        // Menambah jumlah item dalam keranjang belanja
        const itemIncrement = state.cartItems.find(item => item.id === action.payload.itemId);
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.itemId ? { ...item, amount: item.amount + 1 } : item
          ),
          totalPrice: state.totalPrice + parseFloat(itemIncrement.price),
        };
      case 'DECREMENT_AMOUNT':
        // Mengurangi jumlah item dalam keranjang belanja
        const itemDecrement = state.cartItems.find(item => item.id === action.payload.itemId);
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.itemId ? { ...item, amount: item.amount - 1 } : item
          ),
          totalPrice: state.totalPrice - parseFloat(itemDecrement.price),
        };
        case 'REMOVE_FROM_CART':
            // Menghapus item dari keranjang belanja
            const removedItem = state.cartItems.find(item => item.id === action.payload.itemId);
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.itemId);
            return {
              ...state,
              cartItems: updatedCartItems,
              totalPrice: state.totalPrice - (parseFloat(removedItem.price) * removedItem.amount),
            };  
        case 'CLEAR_CART':
            return {
                ...state,
              cartItems: []
            }       
      default:
        return state;
    }
  };
  
  export default cartReducer;
  