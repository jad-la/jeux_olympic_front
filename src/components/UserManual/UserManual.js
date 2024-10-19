import React from 'react';
import './UserManuel.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const UserManuel = () => {
    return (
       <div>
            <Header/>
            <div className="user-manual">
                <h1>Manuel d'Utilisation</h1>
                <h2>Introduction</h2>
                <p>Ce guide va vous aider à naviguer sur le site, choisir vos tickets, et finaliser votre achat en toute simplicité.</p>
                <div>
                    <h2>Accueil et sélection de catégories de Sports</h2>
                    <p>Dans la page d'accueil vous trouverez la liste de catégorie de sport, vous devez cliquer sur une catégorie de sport de votre choix pour voir les différentes épreuves disponible.</p>
                    <img src="/assets/images/categorie_sport.png" alt="Page des épreuves" />
                </div>
                <div>
                    <h2>Sélection des Épreuves et Ajout au Panier</h2>
                    <p>Après avoir sélectionné une catégorie de sport, vous serez redirigé vers la page des épreuves. Chaque épreuve affiche des détails comme le lieu, la date, l'heure et les offres disponibles (solo, duo, familiale).</p>
                    <img srs="/assets/images/Choisir_offre.png" alt="Page de panier" />
                    <p>Une fois que vous avez choisi une épreuve et une offre (solo, duo, familiale), cliquez sur le bouton "Ajouter au panier".
                        Si vous êtes connecté : L’article sera directement ajouté au panier.
                        Si vous n'êtes pas connecté : Une popup apparaîtra pour vous demander de vous connecter ou de vous inscrire.
                    </p>
                    <img srs="/assets/images/Cliquer_inscrire.png" alt="Popup" />
                </div>
                <div>
                    <h2>Gestion du Panier</h2>
                    <p>Cliquez sur l'icône du panier pour voir tous les articles que vous avez sélectionnés.</p>
                    <img src="/assets/images/voir_panier.png" alt="Page de paiement" />
                    <p>Depuis cette page, vous pouvez :
                        Supprimer un article du panier.
                        Valider votre choix en cliquant sur "Valider la réservation".
                    </p>
                </div>
                <div>
                    <h2>Paiement et Confirmation</h2>
                    <p>Après avoir cliqué sur "Valider la réservation", vous serez redirigé vers une page de paiement. Entrez vos informations personnelles et les détails de votre carte bancaire.</p>
                    <img src="/assets/images/paiement_info.png" alt="Page d'accueil" />
                    <p>Une fois le paiement effectué, vous serez redirigé vers la page de vos tickets. Vous pourrez y voir l’ensemble de vos tickets achetés et télécharger vos e-tickets.</p>
                    <img src="/assets/images/Telechargez_ticket.png" alt="Page de tickets" />
                </div>    
            </div>
            <Footer/>
    </div> 
    );
};

export default UserManuel;