import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="app-header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/free-vector/flat-design-antojitos-logo-design-template_23-2149599172.jpg?size=626&ext=jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className= "res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId } />
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>20min delivery</h5>
    </div>
  )

};

const resObj = {
  "info": {
    "id": "14555",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "HMT Layout",
    "areaName": "R T Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Pizzas", "Burger", "Fries", "Salads"
    ],
    "avgRating": 4.1,
    "parentId": "721",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 0.4,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "0.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-03-19 03:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-ba40a0b9-e2ca-405a-be38-53e8a8f11608"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-hmt-layout-r-t-nagar-bangalore-14555",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
};

const Body = () => {
  return (
  <div className="body-layout">
    <div className="search">Search</div>
    <div className="restaurant-card">
      <RestaurantCards resData={resObj} />
      {/* <RestaurantCards resName="KFC 64" cusine="burger"/> */}
    </div>
  </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);