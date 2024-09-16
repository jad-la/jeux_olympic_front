import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';
import CategorieCard from '../CategorieCard/CategorieCard';

const Categories = () => {
      const categories = [
        { iconClass: 'fa-running', name: 'Athlétisme' },
        { iconClass: 'fa-swimmer', name: 'Natation' },
        { iconClass: 'fa-table-tennis', name: 'Tennis de table' },
        { iconClass: 'fas fa-regular fa-futbol', name: 'Football' }
      ];
    return (
        <div className="categories-container">
            <h2 className="categories-title">Catégories</h2>
            <div className="categories-list">
              {categories.map(categorie => (
                <Link to={`/events/${categorie.name.toLowerCase()}`} key={categorie.name}>
                  <CategorieCard iconClass={categorie.iconClass} name={categorie.name} />
                </Link>
              ))}
            </div>
      </div>
    );
};

export default Categories;