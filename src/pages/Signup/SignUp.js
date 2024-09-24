import React, { useState }  from 'react';
import './SignUp.css'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  //on met à jour l'état à chaque modification des champs du formulaire
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // on vérifie de la correspondance des mots de passe
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
       // on fait une requête pour enregistrer l'utilisateur
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register/`, {
        last_name: formData.lastname,
        first_name: formData.firstname,
        email: formData.email,
        password: formData.password, 
        password2: formData.confirmPassword
      },
      {
        headers: {
          'Content-Type': 'application/json',  
        },
      });
      
      if (response.status === 201) {
        // Redirige l'utilisateur vers la page de connexion après une inscription réussie
        navigate('/login');
      }
    } catch (error) {
      if (error.response) {
        // Affiche les détails de l'erreur en cas d'echec
        console.log(error.response.data);
        setErrorMessage('Erreur lors de l’inscription : ' + error.response.data);
      }else {
      setErrorMessage('Erreur lors de l’inscription. Veuillez réessayer.');
      }
    }
  }; 

  return (
    <div className="signup-container">
        <Header/>
      <div className="signup-form">
        <h2>Inscription</h2>
        <p>Entrez vos informations</p>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label>Nom</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required />
          <label>Prénom</label>
          <input type="text" name="firstname"  value={formData.firstname} onChange={handleInputChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email}  onChange={handleInputChange} required />
          <label>Mot de passe</label>
          <input type="password" name="password"  value={formData.password}  onChange={handleInputChange} required />
          <label>Confirmation de mot de passe</label>
          <input type="password" name="confirmPassword"  value={formData.confirmPassword}  onChange={handleInputChange} required />
          <button type="submit">S'inscrire</button>
          <p className="already-member">Déjà inscrit? <Link to="/login">Se connecter</Link></p>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default SignUp;