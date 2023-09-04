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
            <div className='p-5'>
                <CreateButton 
                    buttonFunction={"Deck"} 
                    routePath={"/decks/new"} 
                />
                <br />
                <h2><b>Available Decks</b></h2>
                <br />
                <ul style={{listStyleType: 'none'}}>{currentDecks}</ul>
            </div>
        )
    }
    return (
        <div>
            <h2>There are no decks yet.</h2>
            <p>Let's create one and get started!</p>
            <CreateButton 
                buttonFunction={"Deck"} 
                routePath={"/decks/new"} 
            />
        </div>
    )
};

export default DeckList;