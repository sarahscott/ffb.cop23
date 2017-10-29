import React, { Component } from 'react'
import wave from "../wave_icon.png"
import house from "../water_house_icon.png"
import buds from "../buds.png"
import science from "../science.png"

class About extends Component {
  render() {
    return (
      <div style={{marginLeft: 0, marginTop: 40, display: "flex", justifyContent: "center", fontFamily: "klima", marginBottom: 30}}>
        <p style={{alignContent: "center", textAlign: "center", width: "75%", lineHeight: 1.5}}>
        Welcome to our interactive map of Germany and Oceania, in line with the Pacific focus and leadership of COP23. With this map we want to emphasize a positive message through <i>talanoa</i>, or shared stories. Here, we visually connect the stories of divestment movements in Germany and the climate justice movements in the Pacific Islands, as well as other global indigenous movements to protect the land and water.
        <br/><br/>
        <img src={wave} style={{width: 100}}/>
        
        <h1>“Our Sea of Islands” – Oceania</h1>    
        “There is a gulf of difference between viewing the Pacific as ‘islands in a far sea’ and as ‘a sea of islands’. The first emphasises dry surfaces in a vast ocean far from the centres of power. When you focus this way you stress the smallness and remoteness of the islands. The second is a more holistic perspective in which things are seen in the totality of their 
        relationships" <br/><br/>
        "Oceania is vast, Oceania is expanding, Oceania is hospitable and generous, Oceania is humanity rising from the depths of brine and regions of fire deeper still, Oceania is us. We are the sea, we are the ocean, we must wake up to this ancient truth and together use it to overturn all hegemonic views that aim ultimately to confine us again, physically and psychologically, in the tiny spaces which we have resisted accepting as our sole appointed place, and from which we have recently liberated ourselves. We must not allow anyone to belittle us again, and take away our freedom.”
        <br/><br/> - Epeli Hau‘ofa (2008). “Our Sea of Islands”. <i>We Are the Ocean: Selected Works.</i> University of Hawai‘i Press. 
        <br/><br/>
        

        <img src={buds} style={{width: 100}}/>    
        
        
        <a href={"https://cop23.com.fj/about-cop-23/vision-and-logo/"}><h1>Fiji’s Vision for Presidency of COP23 – Talanoa</h1></a>
        “Fiji’s vision is for a Presidency that is transparent and inclusive of all, advances the Paris Agreement and accelerates climate action for vulnerable societies, drawing on our own experiences as a small island developing state in the Pacific.”
        <br/><br/>
        “To infuse COP23 with the Fijian “Bula Spirit” of inclusiveness, friendliness and solidarity and promote the Pacific concept of talanoa. This is a process of inclusive, participatory and transparent dialogue that builds empathy and leads to decision making for the collective good. It is not about finger pointing and laying blame but is about listening to each other, learning from each other, sharing stories, skills and experiences. By focusing on the benefits of action, this process will move the global climate agenda forward.”
        <br/><br/>

        <img src={house} style={{height: 70}}/>    
        
        
        <h1>Indigenous Peoples and non-self-governing territories</h1>
        Indigenous Peoples are the custodians of land and water throughout the world, but are not given much of an ability to speak in forums like the COP; instead they are represented through their colonial occupiers.
        <br/><br/>
        Among the Indigenous Peoples of the Americas, Africa, Asia, and Europe, there are various Pacific and Caribbean non-member states that are sidelined with their shared climate impacts. In our map we highlight several of these in their talanoa and welcome further submissions.
        <br/><br/>
        <img src={science} style={{height: 50}}/>    
        
        <h1>350 Pacific #HaveYourSei – Pacific Climate Warrior Declaration on Climate Change</h1>
        Fossil Free is the divestment arm of 350.org and its climate activism. <a style={{fontSize: 16}} href={"https://twitter.com/350Pacific"}>350 Pacific</a> and the Pacific Climate Warriors have a hashtag campaign <a style={{fontSize: 16}} href={"https://twitter.com/hashtag/HaveYourSei?src=hash"}>#HaveYourSei</a> and a declaration you can sign to share the significance of making a change in this Pacific COP.
        <br/><br/>
        <a style={{fontSize: 15}} href={"https://haveyoursei.org/"}> Sign the Pacific Climate Warrior Declaration on Climate Change </a>
        <br/><br/>
        “This year, with Fiji as the President of COP 23, the Pacific region will show the world what true climate leadership is. We will highlight for the world what climate change in the Pacific looks like and how inaction on climate change exacerbates that threat.”
        <br/><br/>
        “Climate change is real and impacting now, and it’s imperative that we stand up for the Pacific, and the global community, and act now to avoid further climate catastrophe. This COP should be about the people, not the profits and the polluters.”   
        <br/><br/><br/><br/>
        
        <i>Text by Karin Louise Hermes</i> <br/><br/>

        <i>[ Klima font by Matthew Anderson, made for people fighting climate change. Wave icon by Vladimir Belochkin from the Noun Project. Other icons by 350.org]</i>
        
        </p>
      </div>
    )
  }
}

export default About