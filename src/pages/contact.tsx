import { SampleFeatured } from "../assets";
import { FooterHome, InstaHome } from "../components/molecules";

export const Contact = () => {
  return (
    <div>
      <a href={`/contact`} />
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="page-title">
              <h1 className="display">Contáctanos</h1>
              <h6 className="tagline">Ponte en contacto con nosotros</h6>
            </div>
          </div>
          <img src={SampleFeatured} alt="" />
        </div>
      </header>
      <div id="content" className="site-content">
        <div className="wrapper">
          <div className="entry-content">
            <div className="block-columns text-center">
              <div className="block-column">
                <h4>Nuestros correos electrónicos</h4>
                <p className="text-faded text-uppercase">
                  realidadcode-ficada@gmail.com
                  <br />
                  contactanosrealidadcode-ficada@gmail.com
                </p>
              </div>
            </div>
            <form action="contact.html" method="post">
              <div className="alert">
                This is an example of a form which needs proper backend
                implementation to work.
              </div>
              <p className="first-column no-margin-bottom">
                <label htmlFor="author">
                  Tu nombre <span className="required">*</span>
                </label>{" "}
                <input
                  id="author"
                  name="author"
                  type="text"
                  value=""
                  size="30"
                  maxlength="245"
                  required="required"
                />
              </p>
              <p className="last-column no-margin-bottom">
                <label htmlFor="email">
                  Tu correo electrónico <span className="required">*</span>
                </label>{" "}
                <input
                  id="email"
                  name="email"
                  type="email"
                  value=""
                  size="30"
                  maxlength="100"
                  required="required"
                />
              </p>
              <p className="no-margin-bottom">
                <label htmlFor="message">
                  Tu mensaje <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols="45"
                  rows="5"
                  maxlength="65525"
                  required="required"
                />
                <textarea />
              </p>
              <p className="no-margin-bottom">
                <input
                  name="submit"
                  type="submit"
                  id="submit"
                  value="Enviar mensaje"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
      <InstaHome />
      <FooterHome />
    </div>
  );
};
