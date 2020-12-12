import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavPage from '../navPage'
import HomePage from '../cmpe272/homePage'
import PortfolioHome from '../portfolio/portfolioHome'
import Admin from '../cmpe272/admin'
import User from '../cmpe272/user'

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={NavPage}/>
            <Route path="/cmpe272" exact component={HomePage}/>
            <Route path="/portfolio" exact component={PortfolioHome}/>
            <Route path="/cmpe272/admin" component={Admin}/>
            <Route path="/cmpe272/user" component={User}/>
            <Route path="/cmpe272/HomeSmart" component= {() => {
                window.location.href = "https://brandon-ngo.xyz/";
                return null;
            }}/>
        </Switch>
    )
}