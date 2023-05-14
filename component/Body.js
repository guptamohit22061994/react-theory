import React from 'react';

const RestaurantList=[
  {
    "type": "restaurant",
    "data": {
      "type": "A",
      "id": "1",
      "name": "Ro'Lit! - lit Momos & Rolls",
      "uuid": "f51ee0f8-595c-4b70-bd7e-7f03ed7f59c9",
      "city": "4",
      "area": "Uttam Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "assets/pizza.webp",
      "cuisines": [
        "Fast Food",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 16000,
      "costForTwoString": "₹160 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "ro'lit!-(lit'-momos-&-rolls!)-rani-bagh-rani-bagh",
        "city": "delhi"
      },
      
      "longDistanceEnabled": 0,
      "rainMode": "HEAVY",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6608058~p=1~eid=00000187-e2f9-ddc1-23d1-fae700b40126",
     
      "lastMileTravelString": "0.4 kms",
     
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "B",
      "id": "2",
      "name": "Momos Express",
      "uuid": "f51ee0f8-595c-4b70-bd7e-7f03ed7f59c9",
      "city": "4",
      "area": "Uttam Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "assets/Chinesemomo.webp",
      "cuisines": [
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 16000,
      "costForTwoString": "₹160 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "momos-express",
        "city": "delhi"
      },
      
      "longDistanceEnabled": 0,
      "rainMode": "HEAVY",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6608058~p=1~eid=00000187-e2f9-ddc1-23d1-fae700b40126",
     
      "lastMileTravelString": "0.4 kms",
     
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "C",
      "id": "3",
      "name": "Ambarsari-Kulcha-Point",
      "uuid": "f51ee0f8-595c-4b70-bd7e-7f03ed7f59c9",
      "city": "4",
      "area": "Uttam Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "assets/Ambarsari-Kulcha-Point.webp",
      "cuisines": [
        "Punjabi, North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 16000,
      "costForTwoString": "₹160 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "Ambarsari-Kulcha-Point",
        "city": "delhi"
      },
      
      "longDistanceEnabled": 0,
      "rainMode": "HEAVY",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6608058~p=1~eid=00000187-e2f9-ddc1-23d1-fae700b40126",
     
      "lastMileTravelString": "0.4 kms",
     
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "D",
      "id": "4",
      "name": "Muradabadi Biryani",
      "uuid": "f51ee0f8-595c-4b70-bd7e-7f03ed7f59c9",
      "city": "4",
      "area": "Uttam Nagar",
      "totalRatingsString": "4+ ratings",
      "cloudinaryImageId": "assets/Muradabadi-Biryani.webp",
      "cuisines": [
        "Biryani, North Indian, Mughlai"
      ],
      "tags": [
        
      ],
      "costForTwo": 16000,
      "costForTwoString": "₹160 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "biryani-north-indian-mughlai",
        "city": "delhi"
      },
      
      "longDistanceEnabled": 0,
      "rainMode": "HEAVY",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6608058~p=1~eid=00000187-e2f9-ddc1-23d1-fae700b40126",
     
      "lastMileTravelString": "0.4 kms",
     
    },
    "subtype": "basic"
  },
];

const RestuarantCard=({cloudinaryImageId,name,cuisines,totalRatingsString})=>{
  // const{cloudinaryImageId,name,cuisines,totalRatingsString}=restaurant?.data;
    return(
        <div className="card mb-3">
        <img src={cloudinaryImageId} alt="card" className="card_img"/>
        <div className="des">
        <h2>{name} </h2>
        <p>{cuisines}</p>
        <h5> {totalRatingsString} </h5>
    </div> 
    </div>
    );
}
const Body=()=>{
    return(
        <>
         <div className="mt-5 pt-3">
        <form className="example d-flex py-3 px-3">
  <input type="text" placeholder="Search.."/>
  <button type="button" className="px-2 text-white"><i className="fa fa-search"></i></button>
</form>
        </div>
        
        <div className="px-3 d-flex justify-content-between flex-wrap mb-3">
        {
          RestaurantList.map((restaurant)=>{
            return <RestuarantCard {...restaurant?.data} key={restaurant.data.id}/>
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