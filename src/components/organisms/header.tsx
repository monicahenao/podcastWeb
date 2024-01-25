import { LogoDarkp, Logop } from "../../assets";
import { MenuEpisodes, MenuHome, MenuBlog, SocialItems } from "../molecules";

export const Header = () => {
  return (
    <header id="top-header" className="site-header">
      <div className="wrapper">
        <div className="site-identity">
          <a
            href={`/`}
            className="custom-logo-link"
            rel="home"
            title="Visita la página de inicio"
          >
            <img
              src={Logop}
              className="custom-logo"
              width="131"
              height="36"
              alt="Bateria"
            />
            <img
              src={LogoDarkp}
              className="custom-logo alt-version"
              width="131"
              height="36"
              alt="Bateria"
            />
          </a>
          <p className="site-description screen-reader-text">
            Podcast Realidad Codificada
          </p>
        </div>
        <div id="menu-toggle" className="mobile-menu-toggle">
          <a href="#menu-main" title="Toggle menu">
            <em className="mdi mdi-menu"></em>
            <em className="mdi mdi-close"></em>
          </a>
        </div>
        <nav className="main-navigation">
          <ul id="menu-main" className="menu">
            <MenuHome />
            <MenuEpisodes />
            <MenuBlog />
            <li>
              <a href={`/contact`}>Contáctanos</a>
            </li>
          </ul>
        </nav>
        <SocialItems />
      </div>
    </header>
  );
};
