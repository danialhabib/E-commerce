import React from 'react'

const PriceConverter = ({price}) => {
 // console.warn(price);
  return (
  Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigit:2,}).format(price/100)
  ) 
}

export default PriceConverter
