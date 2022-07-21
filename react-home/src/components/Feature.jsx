import React from 'react'
import FeaturesBox from './FeaturesBox'
import image1 from '../images/feature_1.png'
import image2 from '../images/feature_2.png'
import image3 from '../images/feature_3.png'

const Feature = () => {
  return (
    <div className="features">
        <div className="a-container">
           <FeaturesBox title="Benchmark" image={image1}/>
           <FeaturesBox title="Chapter One" image={image2}/>
           <FeaturesBox title="Avtorai" image={image3}/>
        </div>
    </div>
  )
}

export default Feature