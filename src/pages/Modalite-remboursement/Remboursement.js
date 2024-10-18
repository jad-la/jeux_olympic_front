import React from 'react';
import './Remboursement.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Remboursement = () => {
    return (
        <div >
            <Header/>
            <main className="remboursement">
                <h1>Modalités de Remboursement</h1>
                <p>
                Les e-billets achetés pour nos événements sont régis par les conditions suivantes, qui définissent la manière dont les demandes de remboursement doivent être traitées. Nous vous invitons à lire attentivement ces conditions pour comprendre comment procéder en cas de besoin de remboursement.
                </p>
                <h2>Conditions de Remboursement</h2>
                <ul>
                    <li><strong>Délai de Remboursement :</strong> Les demandes de remboursement doivent être effectuées au moins 30 jours avant la date de l'événement programmé. Aucun remboursement ne sera possible passé ce délai.</li>
                    <li><strong>État du Billet :</strong> Comme il s'agit de e-billets, le billet doit n'avoir été ni scanné ni utilisé pour être éligible au remboursement. Le système vérifiera si le code QR du billet a été scanné ou non.</li>
                </ul>
                
                <h2>Frais non remboursables</h2>
                <p>Les frais de service et les frais de transaction effectués lors de l'achat initial ne sont pas remboursables.</p>
                
                <h2>Procédure de Remboursement</h2>
                <ul>
                    <li><strong>Mode de Remboursement :</strong> Si la demande est approuvée, le remboursement sera effectué via le mode de paiement original utilisé lors de l'achat. Le délai pour voir le remboursement sur votre compte peut varier selon votre banque ou fournisseur de paiement, mais il est généralement effectué sous 10 jours ouvrables.</li>
                    <li><strong>Demande de Remboursement :</strong> Pour demander un remboursement, vous devez nous contacter via notre formulaire en ligne en fournissant les détails de votre achat, y compris le numéro de commande et la preuve que le e-billet n'a pas été utilisé (code QR non scanné).</li>
                </ul>
                
                <h2>Remboursements pour Événements Annulés ou Reportés</h2>
                <ul>
                    <li><strong>Annulation :</strong> En cas d'annulation de l'événement, tous les acheteurs seront intégralement remboursés, y compris les frais de service.</li>
                    <li><strong>Report :</strong> Si l'événement est reporté, les détenteurs de billets auront le choix de conserver leur billet pour la nouvelle date ou de demander un remboursement complet.</li>
                </ul>
                
                <h2>Exceptions</h2>
                <p>Aucun remboursement ne sera accordé si l'événement a lieu comme prévu, mais que le détenteur du billet est incapable d'assister pour des raisons personnelles. Les billets achetés lors de promotions spéciales ou à des tarifs réduits peuvent être soumis à des conditions de remboursement spécifiques, qui seront détaillées au moment de l'achat.</p>
                
                <p>Nous espérons que ces informations vous aideront à comprendre nos politiques et à planifier vos achats en conséquence. Pour toute question supplémentaire ou pour initier une demande de remboursement, veuillez contacter notre service clientèle.</p>
            </main>
            <Footer />
        </div>
      );
};

export default Remboursement;