import Card from "./Card";
import { restaurants } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [rest,setFil]= useState(restaurants);
  return (
    <div className="bdy">
      <div className="Search">
        <button
          className="top_rated"
          onClick={() => {
            const filteredList = rest.filter((el) => el.info.avgRating >= 4);
            setFil(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="carddss">
        {rest.map((x) => {
          return <Card {...x.info} key={x.info.id} />;
        })}
        {/* <Card {...rest[0].info} /> */}
      </div>
    </div>
  );
};

export default Body;

