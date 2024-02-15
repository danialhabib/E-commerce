import React from 'react'
import Section from './Section'
import FeatureProduct from './FeatureProduct'
import Services from './Services'
import Trusted from './Trusted'
import SlidingImages from './SlidingImages'

const Home = () => {
    const data = {
        name: "Ved Store"
      }
  return (
    <>
     {/*  */}
     <SlidingImages/>
      <FeatureProduct/>
     
    </>
  )
}

export default Home
