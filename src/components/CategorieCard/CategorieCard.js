import React from 'react';
import './CategorieCard.css';
import { Link } from 'react-router-dom';

const CategorieCard = ({ iconClass, name }) => {
    return (
        <div className="categorie-card">
            <i className={`fas ${iconClass} categorie-icon`}></i>
            <Link to={`/events/${name.toLowerCase()}`}>{name}</Link>
        </div>
    );
};

export default CategorieCard;