import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createDeck } from '../../utils/api';
import Form from '../../utils/Form';
import BreadcrumbNav from '../BreadcrumbNav';

function CreateDeck() {
    const breadcrumbItems = [
        { label: 'Home', to: '/' },
        { label: 'Create Deck', to: '/categories' },
    ];

    const initialState = {
        name: "",
        description: "",
    };

    const history = useHistory();

    const [deck, setDeck] = useState ( {...initialState});

    const newDeckChangeHandler = ( { target }) => {
        setDeck({
            ...deck, 
            [target.name]: target.value,
        });
    };

    const newDeckCancelHandler = (event) => {
        event.preventDefault();
        history.push("/");
    }

    const newDeckSubmitHandler = (event) => {
        event.preventDefault();
        createDeck(deck)
            .then((response) => {
                setDeck({...initialState});
                history.push(`/decks/${response.id}`);
            });
    };

    return (
        <div>
            <BreadcrumbNav items={breadcrumbItems} />
            <Form
                formTitle={`Create Deck`}
                changeHandler={newDeckChangeHandler}
                cancelHandler={newDeckCancelHandler}
                submitHandler={newDeckSubmitHandler}
                htmlForOne={`createDeckName`}
                formLabelOne={`Name`}
                formPlaceholderOne={`The name of the deck`}
                formNameOne={`name`}
                htmlForTwo={`createDeckDescription`}
                formLabelTwo={`Description`}
                formPlaceholderTwo={`A brief description of the deck`}
                formNameTwo={`description`}
            />
        </div>
    );
};

export default CreateDeck;