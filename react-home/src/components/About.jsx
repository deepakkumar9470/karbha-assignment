import React from 'react'

const About = ({title,image,button}) => {
  return (
    <div className="about">

        <div className="about-image">
            <img src={image} alt="aboutimg" />

        </div>

        <div className="about-text">
            <h2>{title}</h2>
            <p className="details">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration form, by injected humour, or randomised words which don’t look even slightly believable.

            you need to be sure there isn’t anything embarrassing hidden in the middle of text.generators on the Internet.
            </p>
            <button>{button}</button>
        </div>
    </div>
  )
}

export default About