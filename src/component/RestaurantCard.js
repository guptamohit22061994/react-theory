const RestaurantCard = ({ cloudinaryImageId, name, cuisines, totalRatingsString }) => {
    // const{cloudinaryImageId,name,cuisines,totalRatingsString}=restaurant?.data;
    return (
        <div className="card mb-3">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="card" className="card_img" />
            <div className="des">
                <h2>{name} </h2>
                <p>{cuisines}</p>
                <h5> {totalRatingsString} </h5>
            </div>
        </div>
    );
}

export default RestaurantCard;