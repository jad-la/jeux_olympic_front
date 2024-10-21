import React from 'react';
import './Contact.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <div>
       <Header/>
        <main className="contact-container">
        <div className="contact-info">
            <h2>Nous contacter</h2>
            <p>Nous sommes joignables au :</p>
            <p className="phone-number">jeux_olympic_studi@jeuxolympic.fr</p>
        </div>
        <div className="contact-form">
            <h2>Nous écrire</h2>
            <form>
            <div className="input-group">
                <input type="text" name="name" placeholder="Nom" required />
                <input type="email" name="email" placeholder="Email" required />
            </div>
            <textarea name="message" placeholder="Votre Message" required></textarea>
            <button type="submit">Envoyer</button>
            </form>
        </div>
        </main>

        <Footer/>
    </div>
  );
};

export default Contact;