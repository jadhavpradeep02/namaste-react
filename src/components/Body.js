//import Search from "./Search";
import RestaurentCard, { withPromtedLabel } from "./RestaurentCard";
import Shimmer  from "./Shimmer";
import UserContext from "../utils/UserContext.js";
import {useEffect, useState, useContext} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const { loggedInUser, setUserName } = useContext(UserContext);

    const RestaurantCardPromoted = withPromtedLabel(RestaurentCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setRestaurants(jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>🔴 Offline, Please check your internet connection</h1>
    }

    return restaurants.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex p-2 m-2">
                <input type="text" className="m-4 border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for restaurants..." />
                <button className="px-4 py-2 bg-blue-100 m-4 cursor-pointer" onClick={() => {
                    const searchRestaurants = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(searchRestaurants);
                }}>Search</button>

                <button className="px-4 py-2 bg-blue-100 m-4 cursor-pointer" onClick={() => {
                    const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.info.avgRating > 4.1);
                    setRestaurants(topRatedRestaurants);
                }}>
                    Top rated restaurants
                </button>
            </div>

            <div className="search m-4 p-4 flex items-center">
                <label>UserName : </label>
                <input
                    className="border border-black p-2"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className="restaurant-list flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                                { restaurant.info.promoted ? ( <RestaurantCardPromoted resData={restaurant?.info} /> ) :
                                    ( <RestaurentCard resData={restaurant.info} /> )
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Body;
