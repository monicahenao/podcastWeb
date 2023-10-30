import { LogoDarkp, Logop} from "../../assets";
import { MenuEpisodes, MenuHome, MenuBlog, SocialItems } from "../molecules";

export const Header = () => {

    return (
        <header id="top-header" className="site-header">
          <div className="wrapper">
            <div className="site-identity">
              <a href="index.html" className="custom-logo-link" rel="home" title="Visita la página de inicio"><img src={Logop} className="custom-logo" width="131" height="36" alt="Bateria"/><img src={LogoDarkp} className="custom-logo alt-version" width="131" height="36" alt="Bateria"/></a>
                <p className="site-description screen-reader-text">Podcast Realidad Code-ficada</p>
              </div>
                <div id="menu-toggle" className="mobile-menu-toggle">
                  <a href="#menu-main" title="Toggle menu"><em className="mdi mdi-menu"></em><em className="mdi mdi-close"></em></a>
                </div>
                <nav className="main-navigation">
                  <ul id="menu-main" className="menu">
                   <MenuHome/>
                   <MenuEpisodes/>
                   <MenuBlog/> 
                    <li><a href="contact.html">Contáctanos</a></li>
                    <li className="menu-item-scheme">
                      <a href="#" title="Tema de color"><em className="mdi mdi-weather-night"></em><em className="mdi mdi-white-balance-sunny"></em><span>Tema de color</span></a>
                    </li>
                    <li className="menu-item-search">
                      <a href="#searchform" title="Buscar"><em className="mdi mdi-magnify"></em><em className="mdi mdi-close"></em></a>
                      <form className="searchform" method="get" action="blog.html" role="search">
                        <label className="screen-reader-text">Buscar:</label>
                        <input type="search" value="" name="s" placeholder="Search&hellip;" />
                          <button type="submit"><em className="mdi mdi-magnify"></em><span className="screen-reader-text">Buscar</span></button>
                      </form>
                    </li>
                  </ul>
                </nav>
              <SocialItems/>
            </div>
        </header>
    )
}