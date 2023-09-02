import React from "react";
import { Link } from 'react-router-dom';

function CreateButton({ routePath, buttonFunction }) {
    const cardCopy = "Add Card"
    const deckCopy = "Add A New Deck"
    const buttonText = buttonFunction ==='Card' ? cardCopy : deckCopy

    return (
        <span>
            <Link to ={routePath}>
                <button className="btn btn-secondary">{buttonText}</button>
            </Link>
        </span>
    );
};

export default CreateButton;