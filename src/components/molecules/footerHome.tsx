import { Sample540, SampleFeatured } from "../../assets";

export const FooterHome = () => {
  return (
    <footer className="sales-box">
      <div className="wrapper">
        <div className="sales-box-cover">
          <a href="#" className="shine-on-hover">
            <img
              src={Sample540}
              width="540"
              height="540"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
        <div className="sales-box-content">
          <h2>!Mantente al tanto de todo lo que sucede!</h2>
          <p>Escuchanos por Apple podcast, google podcats y más...</p>
          <p>
            <a href="#" className="button button-primary">
              <span className="mdi mdi-amazon"></span> Amazon
            </a>{" "}
            <a href="#" className="button button-primary">
              <span className="mdi mdi-apple"></span> iTunes
            </a>{" "}
            <a href="#" className="button button-primary">
              <span className="mdi mdi-spotify"></span> Spotify
            </a>
          </p>
        </div>
      </div>
      <img src={SampleFeatured} alt="" />
    </footer>
  );
};
