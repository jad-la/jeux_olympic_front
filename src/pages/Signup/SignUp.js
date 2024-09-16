import React from 'react';
import './SignUp.css'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-container">
        <Header/>
      <div className="signup-form">
        <h2>Inscription</h2>
        <p>Entrez vos informations</p>
        <form>
          <label>Nom</label>
          <input type="text" name="lastname" required />
          <label>Prénom</label>
          <input type="text" name="firstname" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Mot de passe</label>
          <input type="password" name="password" required />
          <label>Confirmation de mot de passe</label>
          <input type="password" name="confirmPassword" required />
          <button type="submit">S'inscrire</button>
          <button type="button" className="google-btn">Sign up with Google</button>
          <p className="already-member">Déjà inscrit? <Link to="/login">Se connecter</Link></p>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default SignUp;