import { useState } from "react";
import { SocialItems } from "../molecules";

export const Footer = () => {
  const [formContact, setFormContact] = useState({
    email: "",
  });

  const handlerChange = (event: {
    target: { value: string | number; name: string };
  }) => {
    setFormContact({ ...formContact, [event.target.name]: event.target.value });
  };

  const handlerSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(formContact);
  };

  return (
    <footer className="site-footer">
      <a
        id="scroll-to-top"
        className="scroll-to-top"
        href="#top-header"
        title="To the top"
      >
        <em className="mdi mdi-chevron-up"></em>
        <svg width="150" height="50" viewBox="0 0 39.687499 13.229167">
          <path
            d="M-.0035 296.999c9.007 0 11.8302-13.1833 19.8324-13.1852C27.8372 283.8118 30.636 297 39.683 297c9.047 0-48.6935-.001-39.6864-.001z"
            transform="translate(0,-283.77081)"
          ></path>
        </svg>
      </a>
      <div className="widget-area">
        <div className="widget widget_logo">
          <h3>
            <a href={`/`} className="footer-title">
              Realidad Codificada
            </a>
          </h3>
        </div>
        <div className="widget widget_nav_menu">
          <SocialItems />
        </div>
        <div className="widget widget_text">
          <div className="textwidget">
            <h3 className="widget-title">
              No te pierdas nuestros episodios. ¡Suscríbete ahora!
            </h3>
            <form className="mc4wp-form" method="post" action="index.html">
              <div className="mc4wp-form-fields">
                <p>
                  ¡Bienvenidos a Realidad Codificada, el espacio donde
                  exploramos el fascinante mundo de la tecnología y el desarrollo!
                </p>
                <p className="one-line">
                  <label className="sr-only">Subscription Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico..."
                    required
                    onChange={handlerChange}
                    value={formContact.email}
                  />
                  <input
                    type="submit"
                    value="Suscripción"
                    className="button-color button-filled"
                    onClick={handlerSubmit}
                  />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; 2024 <a href={`/`}>Realidad Codificada</a> &mdash; Creado con
          &hearts; en Colombia. Todos los derechos reservados. &mdash;
          <a className="privacy-policy-link" href={`/privacypolicy`}>
            Política de privacidad
          </a>
        </p>
      </div>
    </footer>
  );
};
