import {useState} from "react";
import restaurantList from "../utils/mockData";

const Search = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <div className="search">
            <button className="search-btn" onClick={() => {
                const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.rating > 4.1);
                setRestaurants(topRatedRestaurants);
            }}>
                Top rated restaurants
            </button>
        </div>
    )
};

export default Search;
