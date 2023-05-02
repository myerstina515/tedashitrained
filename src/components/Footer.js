import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/LogoTT.jpg';
import Advocare from '../assets/advocare-logo-black-and-white.png';


function Footer() {
  return (
    <div className="footer">
      <footer>
        <hr />
        
          
        <p id="footer"><img id="logo2" src={Logo} alt="Tedashi Trained Kettlebell Logo (small)"/>Tedashi Trained &copy; 2021
        
        <br />
          <a href="mailto:tedashitrained@gmail.com">tedashitrained@gmail.com</a>
        </p>
        <div className="social-container">
          <a id="icon" href="https://www.facebook.com/TedashiMyersCPT/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a id="icon" href="https://www.instagram.com/tjthemaxx"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a id="icon" href="https://www.youtube.com/channel/UCEhGqEUv0O5gM_VvG4esW-Q"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
          <a id="icon" href="https://www.advocare.com/10052669" className="advocare">
            <img id="logo3" src={Advocare} alt="Advocare logo black and white"/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;