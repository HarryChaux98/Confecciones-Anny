import Img1 from "./img/producto1.png";
import Img2 from "./img/producto2.png";
import Img3 from "./img/producto3.png";
import Img4 from "./img/producto4.png";
import Img5 from "./img/producto5.png";
import Img6 from "./img/producto6.png";
import Img7 from "./img/producto7.png";
import Img8 from "./img/producto8.png";
import Img9 from "./img/producto9.png";
import Img10 from "./img/producto10.png";
import Img11 from "./img/producto11.png";
import Img12 from "./img/producto12.png";
import Img13 from "./img/producto13.png";
import Img14 from "./img/producto14.png";
import Img15 from "./img/producto15.png";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="inicio_div">
      <nav>
        <section>
          <span>👙👚👗</span>
          <span>BIENVENIDOS A CONFECCIONES ANNY</span>
          <span>👗👚👙</span>
        </section>
      </nav>
      <ul>
        <b>A</b>qui en Confecciones Anny podras Comprar, Moldear y Confeccionar
        la prenda que deseas.
      </ul>
      <h1></h1>
      <ul>
        <b>T</b>enemos para damas, caballeros, niñas y niños hermosos vestidos,
        trajes de baño, blusas, pantalones, ademas se moldea su prenda de acerdo
        a la necesidad de nuestros clientes, atentos a mejorar continuamente.
      </ul>
      <div className="grid_container">
        <div className="grid_item">
          <div className="item-text">
            <h3>Tapabocas</h3>
            <p>
              Adquiere con nosotros tapabocas a tu medida, detal y al por mayor.
            </p>
          </div>
          <img src={Img1} alt="" className="item-img"></img>
          <div className="item-text">
            <p>
              - Por tan solo<b> $4.000 COP </b>la unidad.
            </p>
            <p>
              - Oferton<b> $80.000 COP </b>las 24 unidades.
            </p>
          </div>
        </div>
        <div className="grid_item">
          <div className="item-text">
            <h3>Traje de Baño</h3>
            <p>
              Encontraras hermosos trajes de baño que te haran lucir a la moda y
              son confeccionados con tela de buena calidad a precios asequibles.
            </p>
          </div>
          <img src={Img2} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <img src={Img9} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Traje de Baño para Madre e Hija</h3>
            <p>
              aqui te confeccionamos el modelo y diseño que gustes, para que
              compartan momentos agradables juntas.
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={Img10} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Traje de Baño para Damas</h3>
            <p>
              aqui te confeccionamos el modelo y diseño que gustes con tela de
              buena calidad para que compartan momentos unicos y agradables
              juntas.
            </p>
            <p>
              Por tan solo<b> $95.000 COP</b>.
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={Img11} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Traje de Baño para Damas</h3>
            <p>
              aqui te confeccionamos el modelo y diseño que gustes, para que
              compartan momentos agradables juntas.
            </p>
          </div>
        </div>
        <div className="grid_item">
          <div className="item-text">
            <h3>Enterizos para Bebes</h3>
            <p>
              aqui te confeccionamos el modelo y diseño que gustes para tu bebe.
            </p>
          </div>
          <img src={Img3} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <img src={Img4} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <img src={Img5} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <img src={Img6} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <img src={Img7} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Enterizos para Bebes</h3>
            <p>
              aqui te confeccionamos el modelo y diseño del vestido que gustes.
            </p>
            <p>
              Por tan solo<b> $40.000 COP</b>.
            </p>
          </div>
        </div>
        <div className="grid_item">
          <div className="item-text">
            <h3>Ropa para Niñas</h3>
            <p>
              aqui te confeccionamos el modelo y diseño que gustes para niñas.
            </p>
          </div>
          <img src={Img8} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <img src={Img12} alt="" className="item-img"></img>
          <div className="item-text">
            <h3>Vetidos para Niña</h3>
            <p>
              confeccionamos todo tipo de vestido, nos traes el modelo y el
              diseño de tus sueños.
            </p>
            <p>
            <b> $150.000 COP</b>.
            </p>
          </div>
        </div>
        <div className="grid_item">
          <img src={Img13} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <img src={Img14} alt="" className="item-img"></img>
        </div>
        <div className="grid_item">
          <div className="item-text">
            <h3>Ropa para Mascotas</h3>
            <p>confeccionamos ropa comoda para su mascota de talla pequeña.</p>
            <p>
              Por tan solo<b> $30.000 COP</b>.
            </p>
          </div>
          <p></p>
          <img src={Img15} alt="" className="item-img"></img>
        </div>
      </div>
    </div>
  );
};
export default Inicio;
