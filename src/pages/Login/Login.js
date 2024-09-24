import React, { useState } from 'react';
import './Login.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // mettre à jour les champs du formulaire lors de la saisie
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Requête pour une connexion
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/login/`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        // Récupère le token d'accès 
        const token = response.data.access;
        if (token) {
          // Stocke le token dans le localStorage
          localStorage.setItem('token', token);
          // Redirige l'utilisateur vers la page d'accueil 
          navigate('/');
        } else {
          setErrorMessage('Le token est manquant dans la réponse du serveur.');
        }
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage('Email ou mot de passe incorrect.');
      } else {
        setErrorMessage('Erreur lors de la connexion. Veuillez réessayer.');
      }
    }
  };
    return (
        <div className="login-container">
            <Header/>
            <div className="login-form">
                <h2>Se connecter</h2>
                
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form  onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                <button type="submit">Se connecter</button>
                <p className="forgot-password">Mot de passe oublié?</p>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;