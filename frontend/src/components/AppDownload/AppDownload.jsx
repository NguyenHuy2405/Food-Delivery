import { frontendAssets } from "../../assets/frontend_assets/assets";
import "./AppDownload.scss";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={frontendAssets.play_store} alt="" />
        <img src={frontendAssets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
