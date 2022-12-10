import logo from "./logo2.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul className="menu">
        <p></p>
        <img src={logo} width="115" height="115"></img>
        <li>
          <Link to="inicio">Inicio</Link>
          <hr></hr>
        </li>
        <li>
        <Link to="acercade">Acerca de Confecciones Anny</Link>
          <hr></hr>
        </li>
        <li>
            <Link to="location">Ubicacion</Link>
            <hr></hr>
          </li>
        <li>
          <Link to="camara">Camara</Link>
          <hr></hr>
        </li>
        <li>
          <Link to="RecordView">RecordView</Link>
          <hr></hr>
        </li>
      </ul>
    </div>
  );
};
export default Header;