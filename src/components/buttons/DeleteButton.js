import React from 'react';
import { useHistory } from 'react-router-dom';


function DeleteButton({ id, buttonFunction, currentPage, deleteItem }) {
    const history = useHistory();

    const deleteHandler = (event) => {
        event.preventDefault();
        
        if (window.confirm(`Are you sure you want to delete this ${buttonFunction.toLowerCase()}? This cannot be undone.`)) {
            deleteItem(id)
                .then(() => {
                    if (currentPage === "ViewDeck") {
                        history.push("/");
                    } else {
                        history.go(0);
                    }
                });
        };
    };

    return (
        <button className="btn btn-secondary" onClick={deleteHandler}>Delete {buttonFunction}</button>
    );
};

export default DeleteButton;