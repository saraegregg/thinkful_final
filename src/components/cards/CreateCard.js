import React, {useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createCard, readDeck } from '../../utils/api';
import BreadcrumbNav from '../BreadcrumbNav';
import Form from '../../utils/Form';

function CreateCard(){
    const initialCardState = {
        front: "",
        back: "",
        deckId: 0,
    };

    const initialDeckState = {
        id: 0,
        name: "",
        description: "",
        cards: [],
    };

    const { deckId } = useParams();
    const history = useHistory();

    const [ currentCard, setCurrentCard ] = useState({...initialCardState});
    const [currentDeck, setCurrentDeck] = useState({...initialDeckState});
    
    useEffect(() => {
        async function loadCurrentDeckFromAPI() {
            try {
                const response = await readDeck(deckId);
                setCurrentDeck(response);
            } catch (error) {
                console.error(error);
            }
        };
        loadCurrentDeckFromAPI();
    }, [deckId]);

    const createCardChangeHandler = ({ target }) => {
        setCurrentCard({
            ...currentCard,
            [target.name]: target.value,
        });
    };

    const createCardCancelHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${deckId}`)
    };

    const createCardSubmitHandler = (event) => {
        event.preventDefault();
        createCard(deckId, currentCard)
        .then(() => {
            setCurrentCard({...initialCardState});
            history.push(`/decks/${deckId}`);
        });
    };

    const breadcrumbItems = [
        {label: 'Home', to: '/'},
        {label: currentDeck.name, to:`/decks/${currentDeck.id}`, isActive: false},
        {label: 'Add Card', isActive: true}
    ]


    if (currentDeck) {
        return (
            <div>
                <BreadcrumbNav items={breadcrumbItems} />
                <Form
                    formTitle={`${currentDeck.name} Add Card`}
                    changeHandler={createCardChangeHandler}
                    cancelHandler={createCardCancelHandler}
                    submitHandler={createCardSubmitHandler}
                    htmlForOne={`createCardFront`}
                    formLabelOne={`Front`}
                    formPlaceholderOne={`Front side of card`}
                    formNameOne={`front`}
                    htmlForTwo={`createCardBack`}
                    formLabelTwo={`Back`}
                    formPlaceholderTwo={`Back side of card`}
                    formNameTwo={`back`}
                />
            </div>
        );
    };
    return <p>Loading...</p>
};

export default CreateCard;