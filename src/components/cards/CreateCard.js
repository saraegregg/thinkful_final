import React, {useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createCard, readDeck } from '../../utils/api';
import BreadcrumbNav from '../BreadcrumbNav';
import SubmitButton from '../buttons/SubmitButton';
import CancelButton from '../buttons/CancelButton';

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

    function Form(props) {
        return (
            <>
                <h2 >{props.formTitle}</h2>
                <form onSubmit={props.submitHandler}>
                    <div className="row">
                        <div className="col">
                        <label htmlFor={props.htmlForOne}>{props.formLabelOne}</label>
                        <textarea
                            required
                            rows="4" cols="30"
                            placeholder={props.formPlaceholderOne}
                            name={props.formNameOne}
                            type="text"
                            onChange={props.changeHandler}
                            defaultValue={props.formValueOne ? props.formValueOne : ""}
                        />
                        </div>
                        <div className="col">
                        <label htmlFor={props.htmlForTwo}>{props.formLabelTwo}</label>
                        <textarea
                            required
                            rows="4" cols="30"
                            placeholder={props.formPlaceholderTwo}
                            name={props.formNameTwo}
                            type="text"
                            onChange={props.changeHandler}
                            defaultValue={props.formValueTwo ? props.formValueTwo : ""}
                        />
                        </div>
                        </div>
                        <br />
                            <div className="row">
                        <CancelButton cancelHandler={props.cancelHandler} />
                        <SubmitButton />
                    </div>
                </form>
            </>
        );
    };




    if (currentDeck) {
        return (
            <>
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

                
            </>
        );
    };
    return <p>Loading...</p>
};

export default CreateCard;