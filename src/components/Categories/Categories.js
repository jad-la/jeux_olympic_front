import React from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom';
import CategorieCard from '../CategorieCard/CategorieCard';

const Categories = ({ categories }) => {
  const navigate = useNavigate();

    //redirection vers la page du sport lorqu'on clique sur une catégorie
    const handleClick = (categorie) => {
        navigate(`/sports/${categorie.id}`, { state: { categoryName: categorie.name } });
    };
    return (
        <div className="section-categorie">
            <h2 className="categories-title">Catégories</h2>
            <div className="categories-list">
            {categories.map(categorie => (
                    <div className='categories-container' key={categorie.id} onClick={() => handleClick(categorie)}>
                        <CategorieCard name={categorie.name} description={categorie.description} />
                    </div>
                ))}
            </div>
      </div>
    );
};

export default Categories;