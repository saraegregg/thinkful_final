import React from 'react';
import { deleteCard } from '../../utils/api';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';

function Card({ card, deck }){
    
if (card) {
    return (
        <div className="card p-4">
            <div className="row">
                <div className="col">
                    <h5 className="card-title">Front</h5>
                    <p>{card.front}</p>
                </div>
                <div className="col">
                    <h5 className="card-title">Back</h5>
                    <p>{card.back}</p>
                </div>
            </div>
            <div className="row" style={{justifyContent:"flex-end"}}>
                <EditButton
                    routePath={`/decks/${deck.id}/cards/${card.id}/edit`}
                    buttonFunction={"Card"}
                />
                <DeleteButton
                    id={card.id}
                    delete={deleteCard}
                    buttonFunction={"Card"}
                    currentPage={"Card"}
                />
            </div>
        </div>
    )};
};

export default Card;