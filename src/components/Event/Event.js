import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css'; 


const Event = ({ image, title, description, priceSolo, priceDuo, priceFamily, addToCart}) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ title, priceSolo });
    navigate('/cart'); 
  };

  const handleQuantity = (type) => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    } else if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="event">
      <img src={image} alt={title} className="event-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="prices">
        <p>solo {priceSolo}€</p>
        <p>duo {priceDuo}€</p>
        <p>family {priceFamily}€</p>
      </div>
      <div className="quantity-control">
        <button onClick={() => handleQuantity('dec')}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantity('inc')}>+</button>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>Ajouter au panier</button>
    </div>
  );
};

export default Event;