import RestaurantCards from "./RestaurantCards";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {
  const [listOfRest, setListOfRest] = useState(resList);

  return (
  <div className="body-layout">
    <div className="filter">
      <button
        className="filter-button"
        onClick={() => {
          const responseList = listOfRest.filter((result) => result.info.avgRating > 4.4);
          setListOfRest(responseList);
        }}
      >
        Top Rated Restaurantent
      </button>
    </div>
    <div className="restaurant-card">
      {listOfRest.map((restaurant) => (
        <RestaurantCards key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
  );
};

export default Body;