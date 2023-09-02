import React from 'react';
import DeleteButton from '../buttons/DeleteButton';
import { Link } from 'react-router-dom';
import EditButton from '../buttons/EditButton';
import { deleteDeck } from '../../utils/api';
import CreateButton from '../buttons/CreateButton';


function Deck({ deck, currentPage }) {
    const { cards } = deck;

    return (
        <div className="container" style={{border: "black"}}>
            <div className="container">
                <h3>{deck.name}</h3>
                <p>{cards.length} cards</p>
            </div>
            <p>{deck.description}</p>
            <div className="container">
                <div className="row">
                    <div>
                    {currentPage === "DeckList" && (
                        <div >
                            <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
                        </div>
                    )}
                    </div>
                    <div className="row">
                        <div className="col">
                            { currentPage === "ViewDeck" && (
                                <EditButton
                                routePath={`/decks/${deck.id}/edit`}
                                buttonFunction={"Deck"}
                                />
                            )}
                        </div>
                        <div className="col">
                        <Link to={`/decks/${deck.id}/study`} className="btn btn-secondary">Study</Link>
                        </div>
                        <div className="col">
                            <CreateButton routePath={`/decks/${deck.id}/cards/new`} buttonFunction={"Card"}>Add Cards</CreateButton>
                        </div>
                        <div className="col">
                            <DeleteButton id={deck.id} currentPage={currentPage} buttonFunction={"Deck"} deleteItem={deleteDeck} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deck;