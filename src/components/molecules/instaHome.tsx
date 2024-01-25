import { PhotoGallery } from ".";

export const InstaHome = () => {
  return (
    <footer className="site-footer-gallery">
      <div className="wrapper">
        <a
          href="https://instagram.com/"
          target="_blank"
          className="intro-gallery"
        >
          <span className="intro-gallery-title">
            Encuentra mas momentos de Realidad Codificada
            <span className="highlight">en Instagram</span>
          </span>
          <em className="intro-gallery-username">@RealidadCodificada</em>
        </a>
        <PhotoGallery />
        <PhotoGallery />
        <PhotoGallery />
        <PhotoGallery />
        <PhotoGallery />
        <PhotoGallery />
        <PhotoGallery />
        <PhotoGallery />
        <a
          href="https://instagram.com/"
          target="_blank"
          className="outro-gallery"
        >
          <span>No te pierdas la información y las actualizaciones</span>
        </a>
      </div>
    </footer>
  );
};
