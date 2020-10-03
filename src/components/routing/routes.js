import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavPage from '../navPage'
import HomePage from '../cmpe272/homePage'

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={NavPage}/>
            <Route path="/cmpe272" component={HomePage}/>
        </Switch>
    )
}