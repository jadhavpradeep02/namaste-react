import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext.js";

const RestaurentCard = (props) => {
    const resData = props.resData;
    const {loggedInUser} = useContext(UserContext);
    const { name, image, cuisines, avgRating, cloudinaryImageId } = resData;

    return (
        <div className="m-3 p-3 w-[250px] rounded-lg bg-gray-100">
            <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="restaurant-logo" />
            <h2 className="font-bold text-lg my-2">{name}</h2>
            <h5>{(cuisines || []).join(", ")}</h5>
            <h5>Rating - {avgRating}</h5>
            <h5>30 mins.</h5>
            <h4>User : {loggedInUser} </h4>
        </div>
    )
};



//Higher Order Component

//input - RestaurentCard =>> RestaurentCardPromoted

export const withPromtedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};


export default RestaurentCard;
