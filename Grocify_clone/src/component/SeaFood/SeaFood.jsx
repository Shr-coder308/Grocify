import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSea from '../../assets/seafood-banner.jpg'
const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="SeaFood" bgImage={BgSea} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeaFood
