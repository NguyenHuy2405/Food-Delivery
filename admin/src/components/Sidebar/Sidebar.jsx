import { NavLink } from "react-router-dom";
import { adminAssets } from "../../assets/admin_assets/assets";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={adminAssets.add_icon} alt="add" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={adminAssets.order_icon} alt="add" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={adminAssets.order_icon} alt="add" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
