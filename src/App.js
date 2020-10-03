import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './components/routing/routes'
import History from './components/routing/history'

function App() {

  return (
    <Router history={History}>
       <Routes/>
    </Router>
     

  );
}

export default App;
