import React, { useEffect, useState } from 'react';
import { listDecks } from '../../utils/api';
import CreateButton from '../buttons/CreateButton';
import Deck from './Deck';

function DeckList() {
    const [ decks, setDecks ] = useState ([]);

    useEffect(() => {
        setDecks([]);
            async function retrieveDecks() {
                try {
                const response = await listDecks();
                setDecks(response);
                } catch (error) {
                console.error(error);
                }
            }
            retrieveDecks();
        }, []);

    const currentDecks = decks.map((deck) => <li key={deck.id}><Deck deck={deck} currentPage={"DeckList"}/></li>)

    if (decks) {
        return (
            <>
                <CreateButton 
                    buttonFunction={"Deck"} 
                    routePath={"/decks/new"} 
                />
                <h2>Available Decks</h2>
                <ul style={{listStyleType: 'none'}}>{currentDecks}</ul>
            </>
        )
    }
    return (
        <>
            <h2>There are no decks yet.</h2>
            <p>Let's create one and get started!</p>
            <CreateButton 
                buttonFunction={"Deck"} 
                routePath={"/decks/new"} 
            />
        </>
    )
};

export default DeckList;