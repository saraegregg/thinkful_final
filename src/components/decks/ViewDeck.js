import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import CardList from '../cards/CardList';
import Deck from './Deck';
import BreadcrumbNav from '../BreadcrumbNav';

function ViewDeck() {
    const initialDeckState = {
        id: 0,
        name: "",
        description: "",
        cards: [],
    };

    const { deckId } = useParams();
    
    const [ currentDeck, setCurrentDeck ] = useState({...initialDeckState});

    useEffect(() => {
        async function loadCurrentDeckFromApi() {
            try {
                const response = await readDeck(deckId);
                setCurrentDeck(response);
            } catch (error) {
                console.error(error);
            }
        };
        loadCurrentDeckFromApi();
    }, [deckId]);

    const breadcrumbItems = [
        { label: 'Home', to: '/' },
        { label: currentDeck.name, isActive: true },
    ]

    return (
        <div>
            <BreadcrumbNav items={breadcrumbItems}/>
            <h2><b>View Deck</b></h2>
            <Deck deck={currentDeck} currentPage={"ViewDeck"} />
            <h3><b>Cards</b></h3>
            <CardList deck={currentDeck} cards={currentDeck.cards} />
        </div>
    );
};

export default ViewDeck;