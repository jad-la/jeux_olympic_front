import React from 'react';
import './CartPage.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Cart = ({ cart, removeFromCart }) => {
    console.log(cart);
    return (
        <div className="cart-page">
            <Header/>
            <div className='main-cartPage'>
                <h2>Votre Panier</h2>
                {cart.length === 0 ? (
                    <p>Votre panier est vide</p>
                ) : (
                    cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.title}</h3>
                        <p>Prix: {item.priceSolo}€</p>
                        <p>Quantité: {item.quantity}</p>
                        <button onClick={() => removeFromCart(item)}>Retirer du Panier</button>
                    </div>
                    ))
                )}
            </div>
          <Footer/>
        </div>
      );
};

export default Cart;