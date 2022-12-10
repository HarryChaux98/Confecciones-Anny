import Img1 from "./img/producto1.png";
import imagen1 from "./fotoperfil.jpeg";
import LinkExternal from "react-link-external";
const Acercade = () => {
  return (
    <div className="inicio_div">
      <h1> CONFECCIONES ANNY </h1>
      <ul></ul>
      <div className="grid_container2">
        <div className="grid_item2">
          <div className="item-text2">
            <h3>Mision</h3>
            <p>
              Confeccionar productos innovadores a la moda y de alta calidad,
              satisfaciendo la necesidad de nuestros clientes, ofreciendo buen
              servicio con excelencia y mejorando continuamente en nuestros
              procesos para lograr la rentabilidad y crecimiento de nuestra
              empresa y equipo de trabajo.
            </p>
          </div>
        </div>
      </div>
      <div className="grid_container2">
        <div className="grid_item2">
          <div className="item-text2">
            <h3>Vision</h3>
            <p>
              ser una empresa líder de la región y a nivel nacional, reconocida
              por innovación, calidad y buen servicio, generando oportunidades
              de trabajo a madres cabeza de hogar, destacando sus habilidades,
              responsabilidad y generando confianza a nuestros clientes{" "}
            </p>
          </div>
        </div>
      </div>
      <nav>
        <p></p>
        <ul className="name_me">
          <b>NOMBRE:</b> ANA CECILIA PANTOJA
        </ul>
        <ul className="ocupation_me">
          <b>OCUPACION:</b> CONTADORA PUBLICA & COSTURERA
        </ul>
        <ul className="age_me">
          <b>EDAD:</b> 40 AÑOS
        </ul>
        <ul>
          <b>RESIDENCIA:</b> MOCOA-PUTUMAYO
        </ul>
        <p></p>
      </nav>
      <ul></ul>
      <center>
        <img src={imagen1} width="200" height="200"></img>
      </center>

      <ul></ul>
      <h1>PRESENTACION ACADEMICA</h1>
      <nav>
        <ul className="estudio_me">
          <b>ESTUDIOS: </b>
          <p>
            <img
              src="https://radcolombia.org/web/sites/default/files/archivos/instituciones/corporacion-universitaria-minuto-de-dios/logo-uniminuto.png"
              width="40"
              height="40"
            />{" "}
            CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS
          </p>
          <p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIv9L64WTHU4Z-bEg-P2mI6mSU8QAAVc3DSapvdzuA&s"
              width="28"
              height="28"
            />{" "}
            INSTITUCIÓN EDUCATIVA SANTA MARÍA GORETTI
          </p>
        </ul>
        <ul className="sigueme_me">
          <b>SIGUEME EN:</b>
          <p></p>
          <ul>
            <b>
              <img
                src="https://th.bing.com/th/id/R.10f0338adc21ae0f23953991672399b8?rik=3UldiG44OXk6hA&riu=http%3a%2f%2fwellnessadvocatesofhope.com%2fwp-content%2fuploads%2f2015%2f02%2ffacebook.jpg&ehk=996P4N8rYbhdha9BsFNHEsAMNWHKdPORpUvTHDyVLJM%3d&risl=&pid=ImgRaw&r=0"
                width="18"
                height="18"
              />{" "}
              FACEBOOK:{" "}
            </b>{" "}
            <LinkExternal href="https://www.facebook.com/anacecy.pantoja">
              anacecy.pantoja
            </LinkExternal>{" "}
          </ul>
          <ul>
            <b>
              <img
                src="https://www.freepnglogos.com/uploads/instagram-icon-png/instagram-icon-buddha-quotes-that-can-change-your-life-gabriela-green-24.png"
                width="18"
                height="18"
              />{" "}
              INSTAGRAM:{" "}
            </b>{" "}
            <LinkExternal href="https://instagram.com/anacecy.pantoja?igshid=YmMyMTA2M2Y=">
              anacecy.pantoja
            </LinkExternal>{" "}
          </ul>
        </ul>
        <ul className="contacto_me">
          <b>PARA MAS INFORMACION: </b>
          <h1></h1>
          <ul>
            <b>
              <img
                src="https://freepngimg.com/thumb/whatsapp/77160-viber-apps-messenger-facebook-iphone-messaging-whatsapp.png"
                width="18"
                height="18"
              />{" "}
              WHATSAPP:{" "}<LinkExternal href="https://wa.me/c/573104159259">
              confecciones anny
            </LinkExternal>{" "}
              </b>{" "}
            <h1></h1>
            <b>EMAIL:{" "}
            </b> anacecyats@gmail.com
          </ul>
        </ul>
        <ul className="ubicacion_me">
          <b>
            BARRIO :{" "}
          </b>{" "}
          <LinkExternal href="https://maps.app.goo.gl/Uv6J7vnWJafZfqyr9">
            Barrio Palermo Sur
          </LinkExternal>{" "}
        </ul>
      </nav>
    </div>
  );
};
export default Acercade;
