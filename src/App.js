import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import content from "./content.json"
import Map from "./Components/Map"
import About from "./Components/About"
import Calendar from "./Components/Calendar"
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const routes = { home: "/ffb.cop23", about: "/ffb.cop23/about", calendar: "/ffb.cop23/calendar", test: "/ffb.cop23/test"}

const App = () => (
  <Router>
    <div>
      <ul>
        <li style={{fontFamily: 'Klima Bold', marginRight: 10, marginLeft: -20, fontSize: 25}}><Link style={{fontSize: 30}} to={routes["home"]}>From a Sea of Islands to the Rhineland(s)</Link> • </li>
        <li style={{ fontFamily: 'Klima Bold', marginRight: 10, fontSize: 25}}><Link style={{fontSize: 30}} to={routes["about"]}>About</Link> • </li>
        <li><Link style={{fontFamily: 'Klima Bold', fontSize: 30}} to={routes["calendar"]}>COP23 Calendar</Link></li>
      </ul>

      <Route exact path={routes["home"]} component={Map}/>
      <Route path={routes["test"]} component={Map}/>
      <Route path={routes["about"]} component={About}/>
      <Route path={routes["calendar"]} component={Calendar}/>
    </div>
  </Router>
)
export default App
