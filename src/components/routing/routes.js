import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavPage from '../navPage'
import HomePage from '../cmpe272/homePage'
import PortfolioHome from '../portfolio/portfolioHome';
import Admin from '../cmpe272/admin';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={NavPage}/>
            <Route path="/cmpe272" exact component={HomePage}/>
            <Route path="/portfolio" exact component={PortfolioHome}/>
            <Route path="/cmpe272/admin" component={Admin}/>
        </Switch>
    )
}