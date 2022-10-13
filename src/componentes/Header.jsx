import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/* <ul class="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Pokemones</a></li>
      </ul> */}
      <ul class="menu">
        <p></p>
        <li>
          <Link to="inicio">Inicio</Link>
          <hr></hr>
        </li>
        <li>
        <Link to="acercade">Acerca de Confecciones Anny</Link>
          <hr></hr>
        </li>
        <li>
          <Link to="pokemones">Pokemones</Link>
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