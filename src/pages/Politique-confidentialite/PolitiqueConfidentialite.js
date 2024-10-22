import React from 'react';
import './PolitiqueConfidentialite.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PolitiqueConfidentialite = () => {
    return (
        <div>
            <Header />
            <main className="confidentialite">
                <h1>Politique de Confidentialité de Jeux-Olympic-Studi</h1>

                <h2>1. Collecte des données</h2>
                <p>
                    Lorsque vous utilisez notre application, nous collectons les informations suivantes :
                </p>
                <ul>
                    <li><strong>Données personnelles :</strong> Votre nom d'utilisateur, adresse e-mail.</li>
                    <li><strong>Données d'utilisation :</strong> Informations sur la manière dont vous interagissez avec notre application.</li>
                </ul>

                <h2>2. Utilisation des données</h2>
                <p>
                    Nous utilisons vos données pour :
                </p>
                <ul>
                    <li>Vous fournir les services que vous avez demandés.</li>
                    <li>Améliorer et optimiser notre application.</li>
                    <li>Assurer la sécurité de nos services.</li>
                </ul>

                <h2>3. Partage des données</h2>
                <p>
                    Nous ne partageons pas vos informations avec des tiers, sauf pour des services nécessaires au bon fonctionnement de l'application, comme l'hébergement ou l'optimisation du trafic.
                </p>

                <h2>4. Droits des utilisateurs</h2>
                <p>
                    Conformément à la réglementation, vous avez le droit d'accéder à vos données, de les corriger, de les supprimer ou de vous opposer à leur traitement. Vous pouvez exercer ces droits en nous contactant à l'adresse suivante : <strong>jeux_olympic_studi@jeuxolympic.fr</strong>.
                </p>

                <h2>5. Sécurité</h2>
                <p>
                    Nous mettons en place des mesures de sécurité pour protéger vos données contre l'accès non autorisé.
                </p>

                <p><strong>Dernière mise à jour :</strong> 17 octobre 2024</p>
            </main>

            <Footer/>
            
        </div>
    );
};

export default PolitiqueConfidentialite;