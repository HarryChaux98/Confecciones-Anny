import imagen1 from "./fotoperfil.jpeg";
import LinkExternal from 'react-link-external';
const Acercade = () => {
  return (
    <div class="inicio_div">
      <nav>
        <section>
          <span>👙👚👗</span>
          <span>BIENVENIDOS A CONFECCIONES ANNY</span>
          <span>👗👚👙</span>
        </section>
      </nav>
      <ul></ul>
      <nav>
        <p></p>
        <ul class="name_me">
          <b>NOMBRE:</b> ANA CECILIA PANTOJA
        </ul>
        <ul class="ocupation_me">
          <b>OCUPACION:</b> CONTADORA PUBLICA & COSTURERA
        </ul>
        <ul class="age_me">
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
        <ul class="estudio_me">
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
        <ul class="sigueme_me">
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
            </b>{" "}<LinkExternal href="https://www.facebook.com/anacecy.pantoja">anacecy.pantoja</LinkExternal>
            {" "}
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
            <LinkExternal href="https://instagram.com/anacecy.pantoja?igshid=YmMyMTA2M2Y=">anacecy.pantoja</LinkExternal>{" "}
          </ul>
        </ul>
        <ul class="contacto_me">
          <b>PARA MAS INFORMACION: </b>
          <ul>
            <b>
              <img
                src="https://freepngimg.com/thumb/whatsapp/77160-viber-apps-messenger-facebook-iphone-messaging-whatsapp.png"
                width="18"
                height="18"
              />{" "}
              WHATSAPP:{" "}
            </b>{" "}
            3104159259{" "}
          </ul>
        </ul>

        <ul class="email_me"></ul>
        <b>EMAIL:</b> anacecyats@gmail.com
      </nav>
    </div>
  );
};
export default Acercade;
