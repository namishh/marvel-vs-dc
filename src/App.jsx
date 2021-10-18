import React from 'react'
import './sass/main.scss'
import {AnimatePresence} from "framer-motion"
// Importing Views
import Home from "./views/Home"
import Teams from "./views/Teams"
import Tickets from "./views/Tickets"
import Merch from './views/Merch'
import {Route, Switch} from "react-router-dom"
const App = () => {
  return (
    <AnimatePresence>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/teams" component={Teams}/>
          <Route exact path="/tickets" component={Tickets}/>
          <Route exact path="/merch" component={Merch}/>
      </Switch>
    </AnimatePresence>
  )
}

export default App
