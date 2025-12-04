import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgfruits from '../../assets/Fruits-banner.jpg'
const Fruits = () => {
  return (
    <div>
   <CategoryPage title="Fruits & veggies" bgImage={Bgfruits} categories={['Fruits','vegetables']}/>
    </div>
  )
}

export default Fruits
