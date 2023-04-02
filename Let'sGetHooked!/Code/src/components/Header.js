import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="head">
      <img src={LOGO_URL}></img>
   
      <ul className="right-nav">
        <li>Home</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;