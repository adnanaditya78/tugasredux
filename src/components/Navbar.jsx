import { CartIcon } from '../icons'
import { useSelector } from 'react-redux';


const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

   // Menghitung total amount dari semua item dalam keranjang belanja
   const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Learning Redux</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{totalAmount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
