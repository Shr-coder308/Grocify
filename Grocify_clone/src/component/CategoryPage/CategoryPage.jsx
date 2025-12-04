import React from "react";
import Banner from "../Banner/Banner";
import ProductList from '../ProductList/ProductList'
import Card from "../Cards/Card";
const CategoryPage = ({title,bgImage,categories=[]}) => {

    let filteredItems=categories.includes('All')
    ? ProductList 
    :ProductList.filter(item=>categories.includes(item.category))

    const renderProduct=filteredItems.map(product=>{
        return(
            <Card image={product.image} name={product.name} price={product.price}/>
        )
    })
  return (
    <div>
      <Banner title={title} bgImage={bgImage}/>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-9 py-20 max-w-[1400px] mx-auto px-10 ">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
