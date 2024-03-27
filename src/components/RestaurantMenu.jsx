import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0247291&lng=77.5947532&restaurantId=" + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    const json = await data.json();
    setResInfo(json.data);

    // fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0247291&lng=77.5947532&restaurantId=23843&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER").then((result) => result.json).then((res) => console.log(res));
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => <li key={item.card.info.id}>
          {item.card.info.name} - {"Rs"} {item.card.info.defaultPrice /100 || item.card.info.price / 100}
        </li>)}
      </ul>
    </div>
  );
}

export default RestaurantMenu;