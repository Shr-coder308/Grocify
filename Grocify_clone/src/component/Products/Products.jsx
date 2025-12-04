import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Card from '../Cards/Card'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
const Products = () => {


    const categories=['All','Fruits','Vegetables','Dairy','Seafood']
    const [activeTab,setActiveTab]=useState('All');

    let filteredItems=activeTab ==='All'
    ? ProductList : ProductList.filter(item=>item.category===activeTab);
    const renderCards=filteredItems.slice(0,8).map(product =>{
        return(
            <Card image={product.image} name={product.name} price={product.price}/>
        )
    })
  return (
  <section>
    <div className="mx-auto max-w-[1400px] px-10 py-20">
        <Heading highlight="Our" heading="Products"/>

        {/* Tabs  */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
            {categories.map(category=>{
                return(
                    <button key={category} className={`px-5 py-2 rounded-lg  cursor-pointer ${activeTab == category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white':'bg-zinc-100'}`} onClick={()=>setActiveTab(category)}>
                        {category}
                    </button>
                )
            })}
        </div>

        {/* Product Listing  */}
        <div className="grid grid-col-1 md:grid-cols-4 gap-9 mt-15">
            {renderCards}
        </div>


        <div className="mt-15 mx-auto w-fit">
            <Link className="rounded-lg md:text-lg text-md bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer" to="/allproducts">View All</Link>
        </div>
    </div>
  </section>
  )
}

export default Products


