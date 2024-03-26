import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import InterviewQuestion from "./InterviewQuestion";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect( () => {fetchData()}, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0247291&lng=77.5947532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsonResponse = await data.json();

    setFilteredRestaurant(jsonResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRest(jsonResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfRest.length === 0 ? <Shimmer /> :  (
  <div className="body-layout">
    <div className="filter">
      <input
        className="search-text"
        type="text"
        value={searchText} 
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="search-button"
        onClick={() => {
          const result = listOfRest.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
          setFilteredRestaurant(result);
      }}
      >
        Search
      </button>

      <button
        className="filter-button"
        onClick={() => {
          const responseList = listOfRest.filter((result) => result.info.avgRating > 4.3);
          setFilteredRestaurant(responseList);
        }}
      >
        Top Rated Restaurant
      </button>
    </div>
    <div><InterviewQuestion /></div>
    <div className="restaurant-card">
      {filteredRestaurant.map((restaurant) => (
        <RestaurantCards key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
  );
};

export default Body;
