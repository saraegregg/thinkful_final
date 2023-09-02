import React, {useEffect, useState} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { updateDeck, readDeck } from '../../utils/api';
import Form from '../../utils/Form';
import BreadcrumbNav from '../BreadcrumbNav';

function EditDeck() {
    const initialDeckState = {
        id: 0,
        name: "",
        description: "",
        cards: [],
    };

    const history = useHistory();
    const { deckId } = useParams();

    const [ currentDeck, setCurrentDeck ] = useState({...initialDeckState});

    useEffect(() => {
        async function loadCurrentDeckFromAPI() {
            setCurrentDeck([]);
            try {
                const response = await readDeck(deckId);
                setCurrentDeck({
                    id: response.id,
                    name: response.name,
                    description: response.description,
                    cards: response.cards,
                });
            }  catch (error) {
                console.error(error);
            }
        };
        loadCurrentDeckFromAPI();
    }, [deckId]);

    const updateDeckChangeHandler = ({ target }) => {
        setCurrentDeck({
            ...currentDeck,
            [target.name]: target.value,
        });
    };

    const updateDeckCancelHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${currentDeck.id}`);
    }

    const updateDeckSubmitHandler = (event) => {
        event.preventDefault();
        updateDeck(currentDeck)
            .then((response) => {
                setCurrentDeck({...initialDeckState});
                history.push(`/decks/${response.id}`);
        });
    };
    
    const breadcrumbItems = [
        { label: 'Home', to: '/' },
        { label: currentDeck.name, to: `/decks/${currentDeck.id}`, isActive: false },
        { label: 'Edit Deck', isActive: true },
    ]

    return (
        <>
            <BreadcrumbNav items={breadcrumbItems}/>
            <Form
                formTitle={`Edit ${currentDeck.name}`}
                changeHandler={updateDeckChangeHandler}
                cancelHandler={updateDeckCancelHandler}
                submitHandler={updateDeckSubmitHandler}
                htmlForOne={`updateDeckName`}
                formLabelOne={`Name`}
                formPlaceholderOne={currentDeck.name}
                formNameOne={`name`}
                formValueOne={currentDeck.name}
                htmlForTwo={`updateDeckDescription`}
                formLabelTwo={`Description`}
                formPlaceholderTwo={currentDeck.description}
                formNameTwo={`description`}
                formValueTwo={currentDeck.description}
            />
        </>
    );
};

export default EditDeck;