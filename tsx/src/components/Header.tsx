import logo from "../../public/imgs/8.png";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Made it by D'Angelo Dario</h4>
    </header>
  );
};

export default Header;
