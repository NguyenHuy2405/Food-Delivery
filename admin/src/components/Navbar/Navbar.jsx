import { adminAssets } from "../../assets/admin_assets/assets";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={adminAssets.logo} alt="logo" />
      <img className="profile" src={adminAssets.profile_image} alt="profile" />
    </div>
  );
};

export default Navbar;
