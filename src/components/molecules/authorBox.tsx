import { Sample540 } from "../../assets";

export const AuthorBox = () => {
  return (
    <aside className="author-box">
      <div className="wrapper">
        <figure className="author-box-image">
          <img
            src={Sample540}
            width="100"
            height="100"
            className="avatar"
            loading="lazy"
            alt=""
            decoding="async"
          />
        </figure>
        <div className="author-box-content">
          <h4 className="author-box-title">
            <span>
              Publicado por
              <a
                href="https://liviucerchez.com"
                title="Visit Liviu Cerchez’s website"
                rel="author external"
              >
                Daniel Castaño
              </a>
            </span>
          </h4>
          <div className="author-box-description">
            Soy de Medellín, Desarrollador Full-Stack Amo Javascript, Ingeniero
            de Sistemas de la Universidad Nacional de Colombia sede Medellín,
            vivo en Envigado-Colombia. Encuentrame en
            <a href="https://twitter.com/liviucerchez">Twitter</a>,
            <a href="https://instagram.com/liviucerchez">Instagram</a> or
            <a href="https://dribbble.com/liviucerchez">Dribbble</a> Para más
            Actualizaciones.
          </div>
        </div>
      </div>
    </aside>
  );
};
