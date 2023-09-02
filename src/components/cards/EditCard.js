import React, { useEffect, useState } from 'react';
import Form from '../../utils/Form';
import { Link, useHistory, useParams } from 'react-router-dom';
import BreadcrumbNav from '../BreadcrumbNav';
import { updateCard, readDeck } from '../../utils/api';


function EditCard() {
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

    const { cardId, deckId } = useParams();
    const history = useHistory();

    const [ currentCard, setCurrentCard ] = useState({...initialCardState});
    const [ currentDeck, setCurrentDeck ] = useState({...initialDeckState});

    useEffect(() => {
        async function loadCurrentDeckFromAPI() {
            try {
                const response = await readDeck(deckId);
                setCurrentDeck(response);
                setCurrentCard(response.cards.find(card => card.id.toString() === cardId));
            } catch (error) {
                console.error(error);
            }
        };
        loadCurrentDeckFromAPI();
    }, [cardId, deckId]);

    const updateCardChangeHandler = ({ target }) => {
        setCurrentCard({
            ...currentCard,
            [target.name]: target.value,
        });
    };

    const updateCardCancelHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${deckId}`)
    };

    const updateCardSubmitHandler = (event) => {
        event.preventDefault();
        updateCard(currentCard)
        .then(() => {
            setCurrentCard({...initialCardState});
            history.push(`/decks/${deckId}`);
        });
    };

    const breadcrumbItems = [
        {label: 'Home', to: '/'},
        {label: currentDeck.name, to: `/decks/${deckId}`, isActive: false},
        {label: `Edit Card ${currentCard.id}`, isActive: true}
    ]

    if (currentDeck && currentCard) {
        return (
            <>
                <BreadcrumbNav items={breadcrumbItems} />
                <Form
                    formTitle={`${currentDeck.name}: Edit Card ${currentCard.id}`}
                    changeHandler={updateCardChangeHandler}
                    cancelHandler={updateCardCancelHandler}
                    submitHandler={updateCardSubmitHandler}
                    htmlForOne={`createCardFront`}
                    formLabelOne={`Front`}
                    formPlaceholderOne={currentCard.front}
                    formNameOne={`front`}
                    formValueOne={currentCard.front}
                    htmlForTwo={`createCardBack`}
                    formLabelTwo={`Back`}
                    formPlaceholderTwo={currentCard.back}
                    formNameTwo={`back`}
                    formValueTwo={currentCard.back}
                />
            </>
        );
    };
    return <p>Loading...</p>
};

export default EditCard;