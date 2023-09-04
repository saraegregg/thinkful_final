import React from "react";
import { Link } from 'react-router-dom';

function CreateButton({ routePath, buttonFunction }) {
    const cardCopy = "Add Card"
    const deckCopy = "Add A New Deck"
    const buttonText = buttonFunction ==='Card' ? cardCopy : deckCopy

    return (
        <div className="p-2">
            <Link to ={routePath}>
                <button className="btn btn-primary">{buttonText}</button>
            </Link>
        </div>
    );
};

export default CreateButton;