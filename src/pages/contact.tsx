import { useState } from "react";
import { SampleFeatured } from "../assets";
import { FooterHome, InstaHome } from "../components/molecules";

export const Contact = () => {


  const [ formContact, setFormContact ] = useState({
      author: '',
      email: '',
      message: ''
  });

  const handlerChange = (event: {target: {value: string | number, name: string}})=> {
    
    setFormContact({...formContact, [event.target.name]: event.target.value});
  }


  const handlerSubmit = (event: {preventDefault: ()=> void })=> {
    event.preventDefault();
    console.log(formContact);
  }



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
            <form >
              <div className="alert">
                Gracias por contactarnos, el mensaje fue enviado exitosamente, estamos ansiosos de leerlo. 
              </div>
              <p className="first-column no-margin-bottom">
                <label htmlFor="author">
                  Tu nombre <span className="required">*</span>
                </label>
                <input
                  name="author"
                  type="text"
                  size={30}
                  maxLength={245}
                  required
                  onChange={handlerChange}
                  value={formContact.author}
                />
              </p>
              <p className="last-column no-margin-bottom">
                <label htmlFor="email">
                  Tu correo electrónico <span className="required">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  onChange={handlerChange}
                  value={formContact.email}

                />
              </p>
              <p className="no-margin-bottom">
                <label htmlFor="message">
                  Tu mensaje <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  cols={45}
                  rows={5}
                  maxLength={500}
                  required
                  onChange={handlerChange}
                  value={formContact.message}

                />
              
              </p>
              <p className="no-margin-bottom">
                <input
                  name="submit"
                  type="submit"
                  id="submit"
                  value="Enviar mensaje"
                  onClick={handlerSubmit}
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
