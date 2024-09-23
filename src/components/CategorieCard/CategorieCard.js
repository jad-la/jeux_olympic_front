import React from 'react';
import './CategorieCard.css';
import { Link } from 'react-router-dom';

const CategorieCard = ({ name, description }) => {
    return (
        <div className="categorie-card">
            {/*lien vers la page spécifique d'un sport, avec le nom du sport en minuscule dans l'URL */}
            <Link to={`/sports/${name.toLowerCase()}`}>{name}</Link>
            <p>{description}</p>
        </div>
    );
};

export default CategorieCard;