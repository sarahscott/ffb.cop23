
import React, { Component } from 'react'
import content from "../content.json"
import ImageMapper from 'react-image-mapper'
import Story from "./Story"
import pacific from '../centrepacifique03.gif'
import ffbIcon from '../ff-x.png'

const MAP = {name: "my-map",
  areas: content.filter((story) => {
    if (story.coords) {
      return true
    }
    return false
  }).map((story) => {
    return { shape: "circle", coords: story.coords, _id: story._id }
  })
}

class Map extends Component {

constructor(props) {
  super(props)
  this.state = { width: 0, height: 0, showMap: true, showOtherDiv: false, highlightedArea: null }
}

updateDimensions() {    
  if(window.innerWidth < 500) {
    this.setState({ width: 450, height: 102, showMap: false });
  } else {
    let update_width  = window.innerWidth;
    let update_height = Math.round(update_width/1.8);
    this.setState({ width: update_width, height: update_height, showMap: true });
  }
}

componentDidMount() {
  this.updateDimensions()
  window.addEventListener("resize", this.updateDimensions.bind(this));    
}

componentWillUnmount() {
  window.removeEventListener("resize", this.updateDimensions.bind(this));
}

handleMouseEnter(event) {
  const story = content[event._id]
  if (!story) return
  const areaName = story.title
  const video = story.video
  this.setState({ highlightedArea: story, showOtherDiv: true })
}

render() {
  const containerStyle = {
    flexDirection: "row",
    marginTop: "50px",
  }

  const selectedStory = this.state.highlightedArea
  
  return (
    <div className="App">      
      <div style={{textAlign: "left", marginLeft: 20, fontFamily: 'Klima' }}>
        <a href={"https://fossilfreeberlin.org"} style={{fontFamily: "Klima Bold", fontSize: 18}}>
          <div style={{display: "flex", alignItems: "center"}}>
          a project by <img src={ffbIcon} style={{height: 20, marginLeft: 10, marginRight: 5}}/> fossil free berlin
          </div>
        </a>
        <h2>hover over a point on the map, then scroll down</h2>
        <div style={containerStyle}>
          {
            this.state.showMap && 
            <ImageMapper width={1200} 
                    src={pacific}
                    map={MAP}
                    onMouseEnter={this.handleMouseEnter.bind(this)}
            />
          }
          { selectedStory && <Story selectedStory={content.find((item)=> item._id === selectedStory._id)} video={this.state.video}/> }  
        </div>
      </div>
    </div>
  )
}
}

export default Map