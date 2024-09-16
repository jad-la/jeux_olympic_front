import React from 'react';
import { useParams } from 'react-router-dom';
import './EventsPage.css';
import Event from '../../components/Event/Event'; 
import EventsData from '../../data/EventsData';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const EventsPage = ({ addToCart }) => {
    const { categoryName } = useParams(); 

    const filteredEvents = EventsData.filter(event => 
        event.category.toLowerCase() === categoryName.toLowerCase()
      );
    return (
        <div className="event-page">
            <Header/>
            <h1 className="h1-events">Athlétisme</h1>
            <div className='main-event-page'>
                {filteredEvents.map((event, index) => (
                    <Event
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                        priceSolo={event.priceSolo}
                        priceDuo={event.priceDuo}
                        priceFamily={event.priceFamily}
                        addToCart={addToCart} 
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default EventsPage;