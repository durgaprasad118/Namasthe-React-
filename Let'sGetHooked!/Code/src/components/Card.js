import { CDN_URL } from "../utils/constants";

const Card = ({name,cloudinaryImageId,cuisines,avgRating}) => {
  return (
  <div className="card">
    <img src={CDN_URL+ cloudinaryImageId}></img>
    <h1>{name}</h1>
    <p>{cuisines.join(",")}</p>
    <h4>{avgRating} Stars</h4>
  </div>)
};

export default Card;