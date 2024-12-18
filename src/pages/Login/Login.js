import React, { useState } from 'react';
import './Login.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState({});
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
    setErrorMessage({}); 
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
          Swal.fire({
            icon: 'success',
            title: 'Connexion réussie',
            text: 'Vous allez être redirigé...',
            timer: 1000,  
            showConfirmButton: false,  
            timerProgressBar: true,   
            willClose: () => {
              navigate('/');
            }
          });

        } else {
          setErrorMessage('Le token est manquant dans la réponse du serveur.');
        }
        
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log('Erreur capturée:', error.response.data);
        
        if (error.response.data.email || error.response.data.password) {
          setErrorMessage(error.response.data)
        } else if(error.response.data.detail) {
          setErrorMessage({ general: error.response.data.detail });
        }
      }else{
        setErrorMessage({general:'Erreur lors de la connexion. Veuillez réessayer.'});
      }
    }
  };
    return (
        <div className="login-container">
            <Header/>
            <div className="login-form">
                <h2>Se connecter</h2>
                
                <form  onSubmit={handleSubmit} noValidate>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                {errorMessage.email && <p className="error-message">{errorMessage.email}</p>}

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                {errorMessage.password && <p className="error-message">{errorMessage.password}</p>}

                <button type="submit">Se connecter</button>
                {errorMessage.general && <p className="error-message">{errorMessage.general}</p>}
                <p className="forgot-password">Mot de passe oublié?</p>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;