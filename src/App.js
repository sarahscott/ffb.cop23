import React, { Component } from 'react'
import logo from './logo.svg'
import pacific from './centrepacifique03.gif'
import styled from 'styled-components'
import ImageMapper from 'react-image-mapper'
import content from "./content.json"
import './App.css'

const MAP = {name: "my-map",
  areas: content.filter((story) => {
    if (story.coords) {
      return true
    }
    return false
  }).map((story, index) => {
    return { shape: "rect", coords: story.coords, _id: index }
  })
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0, showMap: true, showOtherDiv: false, highlightedArea: null }
  }

  updateDimensions() {
    console.log(window.innerWidth)
    
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
    const areaName = story.title
    const video = story.video
    this.setState({ highlightedArea: story, showOtherDiv: true })
  }

  render() {

    const containerStyle = {
      flexDirection: "row",
      marginTop: "50px",
    }
    
    return (
      <div className="App">      
        <div style={{textAlign: "left", marginLeft: 20}}>
          <div className="Navigation-bar">
            <h1> From a Sea of Islands to the Rheinland(s) </h1>
            <h1> About </h1>
            <h1> Calendar of COP23 Events </h1>
          </div>
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
            <StoryContent selectedStory={this.state.highlightedArea} video={this.state.video}/>            
          </div>
        </div>
      </div>
    )
  }
}


class StoryContent extends Component {

  title() {
    const story = this.props.selectedStory
    if (story.link) {
      return (
        <a href={story.link}>{story.title}</a>
      )
    }
    return (
      <h1>{story.title}</h1>
    )
  }

  render() {
    const story = this.props.selectedStory
    const video = story && story.video
    if (!story) return null

    const subtitleStyle = {
      fontSize: 16,
      fontStyle: "italic"
    }

    return (
      <div style={{marginLeft: 20}}>
        { this.title() }
        { story.author && <h1 style={subtitleStyle}>{story.author}</h1> }
        { story.description && <div>{story.description}</div> }
        { video ? <YouTube video={video} autoplay="0" rel="0" modest="1" /> : <div style={{height: 500, width: 10}}/> }
      </div>
    )
  }
}

class YouTube extends Component {
  render() {
      var videoSrc = "https://www.youtube.com/embed/" + 
          this.props.video + "?autoplay=" + 
          this.props.autoplay + "&rel=" + 
          this.props.rel + "&modestbranding=" +
          this.props.modest;
      return (
        <div className="container" style={{marginTop: "20px", marginBottom: "40px"}}>
          <iframe className="player" type="text/html" width="640" height="390"
    src={videoSrc}
    frameBorder="0"/>
        </div>
      )
    }
}

class Link extends Component {
  constructor(props) {
    super(props)
    this.state = {hover: false}
    return this
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {fontFamily: "Verdana", fontSize: 25, textDecorationLine: 'underline'}
    } else {
      linkStyle = {fontFamily: "Verdana", fontSize: 25, fontStyle: "bold", textDecorationLine: null}
    }
    return(
      <h1>
        <a style={linkStyle} 
           onMouseEnter={this.toggleHover.bind(this)}
           onMouseLeave={this.toggleHover.bind(this)}
           href={this.props.href}
        >
           {this.props.children}
        </a>
      </h1>
    )
  }
}

export default App
