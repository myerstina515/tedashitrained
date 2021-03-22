import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className="footer">
      <footer>
        <hr />
        <p id="footer">
          Tedashi Trained &copy; 2021
        <br />
          <a href="mailto:tedashitrained@gmail.com">tedashitrained@gmail.com</a>
        </p>
        <div class="social-container">
          <a id="icon" href="https://www.facebook.com/TedashiMyersCPT/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a id="icon" href="https://www.instagram.com/tjthemaxx"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a id="icon" href="https://www.youtube.com/channel/UCEhGqEUv0O5gM_VvG4esW-Q"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;