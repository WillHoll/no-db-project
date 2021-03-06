import React from 'react';
import MyList from './components/MyList';
import IdeaList from './components/IdeaList';
import AddToList from './components/AddToList';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={MyList}/>
        <Route path='/ideas' component={IdeaList}/>
        <Route path='/poster' component={AddToList}/>
    </Switch>
)
