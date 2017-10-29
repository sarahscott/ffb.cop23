import React, { Component } from 'react'
import styled from 'styled-components'

const Description = styled.div`
width: 700px;
`

class Story extends Component {
  
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
        fontStyle: "italic",
      }
  
      return (
        <div style={{marginLeft: 20}}>
          { this.title() }
          { story.author && <h1 style={subtitleStyle}>{story.author + ' • ' + story.place}</h1> }
          { story.description && <Description>{story.description}</Description> }
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

  export default Story