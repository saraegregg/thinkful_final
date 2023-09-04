import React from 'react';
import { useHistory } from 'react-router-dom';


function DeleteButton( props ) {
    const history = useHistory();

    const deleteHandler = (event) => {
        event.preventDefault();
        
        if (window.confirm(`Are you sure you want to delete this ${props.buttonFunction.toLowerCase()}? This cannot be undone.`)) {
            props.delete(props.id)
                .then(() => {
                    if (props.currentPage === "ViewDeck") {
                        history.push("/");
                    } else {
                        history.go(0);
                    }
                });
        };
    };

    return (
        <div className="p-2">
            <button className="btn btn-danger" onClick={deleteHandler}>Delete {props.buttonFunction}</button>
        </div>
    );
};

export default DeleteButton;