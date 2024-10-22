import React, { useState }  from 'react';
import './SignUp.css'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState({});
  // const navigate = useNavigate();

  //on met à jour l'état à chaque modification des champs du formulaire
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage({}); 
    // on vérifie de la correspondance des mots de passe
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage({password: ['Les mots de passe ne correspondent pas.']});
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
       // Afficher une popup de succès avec un lien vers la page de connexion
        Swal.fire({
          icon: 'success',
          title: 'Inscription réussie',
          html: 'Vous êtes bien inscrit. <a href="/login">Connectez-vous ici</a>',
          showConfirmButton: false
        });
        // navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.erreurs) {
        // Affiche les détails de l'erreur en cas d'echec
        console.log(error.response);
        console.log(error.response.data);
        setErrorMessage(error.response.data.erreurs);
      }else {
      setErrorMessage({general: 'Erreur lors de l’inscription. Veuillez réessayer.'});
      }
    }
  }; 

  return (
    <div className="signup-container">
        <Header/>
      <div className="signup-form">
        <h2>Inscription</h2>
        <p>Entrez vos informations</p>

        {errorMessage && <p className="p-error">{errorMessage.general}</p>}
        <form onSubmit={handleSubmit} noValidate>
          <label>Nom</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required />
          {errorMessage.last_name && <p className="p-error">{errorMessage.last_name}</p>}

          <label>Prénom</label>
          <input type="text" name="firstname"  value={formData.firstname} onChange={handleInputChange} required />
          {errorMessage.first_name && <p className="p-error">{errorMessage.first_name}</p>}

          <label>Email</label>
          <input type="email" name="email" value={formData.email}  onChange={handleInputChange} required />
          {errorMessage.email && <p className="p-error">{errorMessage.email}</p>}

          <label>Mot de passe</label>
          <input type="password" name="password"  value={formData.password}  onChange={handleInputChange} required />
          {errorMessage.password && <p className="p-error">{errorMessage.password}</p>}

          <label>Confirmation de mot de passe</label>
          <input type="password" name="confirmPassword"  value={formData.confirmPassword}  onChange={handleInputChange} required />
          {errorMessage.password2 && <p className="p-error">{errorMessage.password2}</p>}
          
          <button type="submit">S'inscrire</button>
          <p className="already-member">Déjà inscrit? <Link to="/login">Se connecter</Link></p>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default SignUp;