//import Search from "./Search";
import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils/mockData";
import Shimmer  from "./Shimmer";
import {useEffect, useState} from "react";
import { Link } from "react-router";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setRestaurants(jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return restaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for restaurants..." />
                <button className="search-btn" onClick={() => {
                    const searchRestaurants = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(searchRestaurants);
                }}>Search</button>

                <button className="search-btn" onClick={() => {
                    const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.info.avgRating > 4.1);
                    setRestaurants(topRatedRestaurants);
                }}>
                    Top rated restaurants
                </button>
            </div>

            <div className="restaurant-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                                <RestaurentCard resData={restaurant.info} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Body;
