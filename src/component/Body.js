import React, { useEffect, useState } from 'react';
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6220577&lng=77.0470916&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  // console.log(serachTxt);
  if (!allRestaurants) return null;
  if (filteredRestaurants?.length === 0) return <h1 className="nofound">No Restaurants match your filter!!</h1>;
  return filteredRestaurants.length === 0 ? (
    <Shimer />
  ) : (
    <>
      <div className="mt-5 pt-3">
        <form className="example d-flex py-3 px-3">
          <input type="search" className="form-control" placeholder="Search.." value={searchInput} onChange={(e) => {
            setSearchInput(e.target.value);

          }} />

          <button type="button" className="px-2 text-white" onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}><i className="fa fa-search"></i></button>
        </form>
      </div>

      <div className="px-3 d-flex justify-content-between flex-wrap mb-3">
        {
          filteredRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
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