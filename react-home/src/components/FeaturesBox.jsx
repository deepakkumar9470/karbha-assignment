import React from 'react'

const FeaturesBox = ({title,image}) => {
  return (
    <div className="a-box">
        <div className="a-box-img">
            <img src={image} alt="" />
        </div>
        <div className="s-b-text">
            <h2>{title}</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas aspernatur</p>
        </div>

    </div>
  )
}

export default FeaturesBox