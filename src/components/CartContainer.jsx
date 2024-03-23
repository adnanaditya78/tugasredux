// CartContainer.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../cartActions';
import CartItem from './CartItem';
import Modal from './Modal';

const CartContainer = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice.toFixed(2));
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRemoveFromCart = itemId => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    setIsModalOpen(true); // Tampilkan modal ketika clear cart ditekan
  };

  const handleConfirmClearCart = () => {
    dispatch({ type: 'CLEAR_CART' }); // Dispatch action untuk menghapus semua item dari keranjang
    setIsModalOpen(false); // Sembunyikan modal setelah clear cart
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Sembunyikan modal ketika tombol close atau backdrop diklik
  };

  if (cartItems.length < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} onRemove={() => handleRemoveFromCart(item.id)} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClearCart}>clear cart</button>
      </footer>
      {isModalOpen && (
        <Modal close={handleCloseModal} confirm={handleConfirmClearCart}/>
      )}
    </section>
  );
};

export default CartContainer;
