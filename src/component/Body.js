import React, { useState } from 'react';
import {restaurantList} from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput, restaurants){
 const filterData= restaurants.filter((restaurant)=>restaurant.data.name.includes(searchInput));
 return filterData;
}
const Body=()=>{
  const [restaurants, setRestaurants]= useState(restaurantList);
const [searchInput, setSearchInput]= useState();


  // console.log(serachTxt);
 
    return(
        <>
         <div className="mt-5 pt-3">
        <form className="example d-flex py-3 px-3">
  <input type="search" className="form-control" placeholder="Search.."  value={searchInput} onChange={(e)=>{setSearchInput(e.target.value);

  }}/>
 
  <button type="button" className="px-2 text-white" onClick={()=>{
  const data= filterData(searchInput, restaurants);
  setRestaurants(data);
  }}><i className="fa fa-search"></i></button>
</form>
        </div>
        
        <div className="px-3 d-flex justify-content-between flex-wrap mb-3">
        {
          restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant?.data} key={restaurant.data.id}/>
          })
        }
         {/* <RestuarantCard {...RestaurantList[0].data}/> */}
         {/* <RestuarantCard restaurant={RestaurantList[1]}/>
         <RestuarantCard restaurant={RestaurantList[2]}/>
         <RestuarantCard restaurant={RestaurantList[3]}/> */}
         
       </div>
        </>
    );
};
export default Body;