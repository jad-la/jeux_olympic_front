import React from 'react';
import './Login.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Login = () => {
    return (
        <div className="login-container">
            <Header/>
            <div className="login-form">
                <h2>Se connecter</h2>
                <form>
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Password</label>
                <input type="password" name="password" required />
                <button type="submit">Se connecter</button>
                <p className="forgot-password">Mot de passe oublié?</p>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;