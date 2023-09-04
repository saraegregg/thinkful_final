import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadcrumbNav from '../BreadcrumbNav';
import { readDeck } from '../../utils/api';
import FlipCard from '../cards/FlipCard';

function StudyDeck() {
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
        { label: currentDeck.name, to: `/decks/${currentDeck.id}`, isActive: false },
        { label: 'Study', isActive: true },
    ]

    return (
        <>
            <BreadcrumbNav items={breadcrumbItems}/>
            <h2 className="p-2">Study: {currentDeck.name}</h2>
            <div className="card">
                <div>
                    <FlipCard cards={currentDeck.cards} />
                </div>
            </div>
        </>
    );
};

export default StudyDeck;