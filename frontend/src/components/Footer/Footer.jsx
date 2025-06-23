import { frontendAssets } from "../../assets/frontend_assets/assets";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={frontendAssets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            repellendus corrupti natus doloremque commodi dolorum iusto
            reprehenderit repellat consequatur autem quibusdam, cum ipsam
            molestiae. Pariatur sequi possimus alias quidem cumque.
          </p>
          <div className="footer-social-icons">
            <img src={frontendAssets.facebook_icon} alt="facebook" />
            <img src={frontendAssets.twitter_icon} alt="twitter" />
            <img src={frontendAssets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
