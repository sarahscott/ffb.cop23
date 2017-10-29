import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import events from '../calendar_events.json'

class Calendar extends Component {
  formattedEvent(event, index) {
    const color = (index % 2) ? "azure" : "bisque"
    return (
      <div style={{display: "flex", flexDirection: "column", borderWidth: "1px", backgroundColor: color, width: 500, padding: 10, marginBottom: 15}}>
        <a href={"https://google.com"}><h1 style={{fontFamily: "Klima Bold", fontSize: 20}} >{event.date} • {event.title}</h1></a>
        <i style={{fontSize: 14}}>hosted by {event.host} • {event.location}</i>
      </div>
    )
  }

  render() {
    return (
      <div style={{marginLeft: 20, fontFamily: "Klima", alignItems: "center", display: "flex", flexDirection: "column", marginBottom: 30}}>
      <p style={{fontSize: 20, fontFamily: "Klima"}}><i> A selection of COP23-related events in Germany </i><br/> </p>
      
      { events.map((event, index) => {
        return this.formattedEvent(event, index)
      })
      }
      <i style={{fontSize: 15, marginTop: 20}}> Should your event be listed here? <a style={{fontSize: 15}}href={"mailto:sarahoscott@gmail.com"}>Let us know</a></i>
      </div>
    )
  }
}

export default Calendar
