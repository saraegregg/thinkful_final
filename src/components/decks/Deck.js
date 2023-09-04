import React from 'react';
import DeleteButton from '../buttons/DeleteButton';
import { Link } from 'react-router-dom';
import EditButton from '../buttons/EditButton';
import { deleteDeck } from '../../utils/api';
import CreateButton from '../buttons/CreateButton';


function Deck({ deck, currentPage }) {
    const { cards } = deck;

    return (
        <div className="container-fluid">
            <div className="card p-4">
            <div className="row justify-content-between">
                <h3><b>{deck.name}</b></h3>
                <p>{cards.length} cards</p>
            </div>
            <p>{deck.description}</p>
            <div className="container">
                <div className="row">
                    {currentPage === "DeckList" && (
                        <div className="p-2">
                            <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
                        </div>
                    )}
                    <div className="buttons">
                        { currentPage === "ViewDeck" && (
                            <EditButton
                            routePath={`/decks/${deck.id}/edit`}
                            buttonFunction={"Deck"}
                            />
                        )}
                    </div>
                    <div className="p-2">
                    <Link to={`/decks/${deck.id}/study`} className="btn btn-primary p-2">Study</Link>
                    </div>
                    <div>
                        <CreateButton routePath={`/decks/${deck.id}/cards/new`} buttonFunction={"Card"}>Add Cards</CreateButton>
                    </div>
                    <div>
                        <DeleteButton id={deck.id} currentPage={currentPage} buttonFunction={"Deck"} deleteItem={deleteDeck} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Deck;