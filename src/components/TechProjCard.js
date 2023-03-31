import React from 'react'

function TechProjCard({ title, image, description, details, loom, github, created}) {
  
  return (
    <div>
      <div>
        <img width="420" height="315" src={image}></img>
        <h2>{title}</h2>
        <h3>{description}</h3>
        {/* <a href={loom}>Demo</a> */}
        <div>
          <iframe width="420" height="315" src={loom} allow="fullscreen *"></iframe>
        </div>
        {/* <div>
          <iframe width="420" height="315" src={loom} allow="geolocation"></iframe>
        </div> */}
        <a href={github}>GitHub Repo</a>
        <ul>
          {details.split(".").map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h4>Created: {created}</h4>
      </div>
    </div>
  )
}

export default TechProjCard