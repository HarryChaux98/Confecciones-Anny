import Img1 from "./img/producto1.png";
import Img2 from "./img/producto2.png";
import Img3 from "./img/producto3.png";
import Img4 from "./img/producto4.png";
import Img5 from "./img/producto5.png";
import Img6 from "./img/producto6.png";
import Img7 from "./img/producto7.png";
import Img8 from "./img/producto8.png";
import { Link } from "react-router-dom";

const Inicio = () => {
  let data = [
    {
      id: 1,
      imgScrs: Img1,
    },
    {
      id: 2,
      imgScrs: Img2,
    },
    {
      id: 3,
      imgScrs: Img3,
    },
    {
      id: 4,
      imgScrs: Img4,
    },
    {
      id: 5,
      imgScrs: Img5,
    },
    {
      id: 6,
      imgScrs: Img6,
    },
    {
      id: 7,
      imgScrs: Img7,
    },
    {
      id: 8,
      imgScrs: Img8,
    },
  ];
  return (
    <div class="inicio_div">
      <nav>
        <section>
          <span>👙👚👗</span>
          <span>BIENVENIDOS A CONFECCIONES ANNY</span>
          <span>👗👚👙</span>
        </section>
      </nav>
      <p>
        Tenemos para damas, caballeros, niñas y niños hermosos vestidos, trajes
        de baño, blusas, pantalones, ademas se moldea su prenda de acerdo a la
        necesidad de nuestros clientes, atentos a mejorar continuamente{" "}
      </p>
      <li>
          <Link to="Accordion">accordion</Link>
          <hr></hr>
        </li>
      <h1></h1>
      <ul>
        <p>
          Aqui en Confecciones Anny podras Comprar, Moldear y Confeccionar la
          prenda que deseas{" "}
        </p>
      </ul>
      {/* <h1>
        <img
          src="https://th.bing.com/th/id/R.f8e3cdeab0edb251a05736a3c2347da0?rik=wX5QpIiXiiKr1w&riu=http%3a%2f%2fwww.imagenesanimadas.net%2fPersonas%2fOjos%2fOjos-66.gif&ehk=RepBkMbs1TMcN89QLBPt3LOmZ16rp9evBGqnyZcftDE%3d&risl=&pid=ImgRaw&r=0"
          width="120"
          height="120"
        />{" "}
        SIGUE VIENDO{" "}
      </h1>
      <p>click en Acerca de para mas informacion</p> */}
      <>
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div className="pics" key={index}>
                <img src={item.imgScrs} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </>
      <div className='wrapper'>
        <div className='accordion'>
          {data.map((item, i) => {
            <div className='item'>
              <div className='title'>
                <h2>{item.question}</h2>
              </div>
              <div className='content'>{item.answer}</div>
            </div>
          })}
        </div>
      </div>      
    </div>
  );
};
export default Inicio;
