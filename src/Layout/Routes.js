import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DeckList from '../components/decks/DeckList';
import NotFound from './NotFound';
import CreateDeck from '../components/decks/CreateDeck';
import ViewDeck from '../components/decks/ViewDeck';
import EditDeck from '../components/decks/EditDeck';
import StudyDeck from '../components/decks/StudyDeck';
import CreateCard from '../components/cards/CreateCard';
import EditCard from '../components/cards/EditCard';

function Routes() {

    return (
    <Switch>
        <Route exact path="/">
            <DeckList />
        </Route>
        <Route path="/decks/new">
            <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId">
            <ViewDeck />
        </Route>
        <Route exact path="/decks/:deckId/edit">
            <EditDeck />
        </Route>
        <Route exact path="/decks/:deckId/study">
            <StudyDeck />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
            <CreateCard />
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
        </Route>
        <Route>
            <NotFound />
        </ Route>
    </Switch>
    );
}

export default Routes;