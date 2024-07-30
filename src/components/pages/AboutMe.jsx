import React from 'react'

const AboutMe = () => {
  return (
    <div className='about-container'>
      <div className='about-top-container'>
        <div className='about-img'></div>
        <div className='about-info-container'>
          <h1>Abbie Taylor 19</h1>
          <h3>Web Developer and UX/UI Designer</h3>
          <p>I'm someone who loves to create and solve. Whether it's designing or coding I feel this itch and excitment that I want to learn more.I feel huge success and pride when not only I'm proud of what I've created but when users are able to use the application with ease and enjoyment.</p>
          <p>I enjoy designing clean, simple but effective layout's while also have a love for some different and playful idea's. Whether it's through colour or different ways user's can interact whether it works or not, there is still joy in the trial and error, to be able to test the boundries.</p>

          <h5>Example Work: *Created for educational pruposes only</h5>

        </div>
      </div>
      
      <div className='about-bottom-container'>
        
        <div className='about-mockup-img mockup-fnaf'>
          <p>Solo Project</p>
          <p>Film Website Adervertising new Five Night's at Freddy's Movie</p>
        </div>
        <div className='about-mockup-img mockup-loft'>
          <p>Solo Project</p>
          <p>Tablet Ordering system for Lord of the Fries to be used at their locations</p>
        </div>
        <div className='about-mockup-img mockup-accom'>
          <p>Accomadation App users can filter through and view nearby zoo and wildlife parks</p>
        </div>
        <div className='about-mockup-img mockup-splish'> 
          <p>*Team Project: Abbie, Briony, Isabella, Caitlyn</p>         
          <p>Welly Splish 'n' Splash app from Council to promote local pools to teens and young adults</p>
        </div>

        <div className='about-mockup-img mockup-konjo'> 
        <p>*Team Project: Abbie, Sheldon, Abyssinia</p>         
          <p>Konjo a Cafe app for users to order their coffee's on the go and being able to create presets for group coffees</p>
        </div>

      </div>
    </div>
      

  )
}

export default AboutMe
