import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
    const resData = props.resData;
    const { name, image, cuisines, avgRating, cloudinaryImageId } = resData;

    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} alt="restaurant-logo" />
            <h2>{name}</h2>
            <h5>{(cuisines || []).join(", ")}</h5>
            <h5>Rating - {avgRating}</h5>
        </div>
    )
};

export default RestaurentCard;
