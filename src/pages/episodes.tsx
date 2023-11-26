import { SampleFeatured } from "../assets";
import { CardEpisodes, InstaHome, Pagination } from "../components/molecules";

export const Episodes = () => {
  return (
    <>
      <a href={`/episodes`} />
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="page-title">
              <h1 className="display">Episodios</h1>
              <h6 className="tagline">
                Mantenemos actualizaciones constantemente
              </h6>
              <p>
                <a
                  className="button button-underline"
                  href="https://www.apple.com/itunes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mdi mdi-apple"></span> iTunes
                </a>
                <a
                  className="button button-underline"
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.podcasts&hl=es&gl=US&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mdi mdi-google-play"></span> Google Play
                </a>
                <a
                  className="button button-underline"
                  href="https://open.spotify.com/genre/podcasts-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mdi mdi-spotify"></span> Spotify
                </a>
              </p>
            </div>
          </div>
          <img src={SampleFeatured} alt="" />
        </div>
      </header>
      <div id="content" className="site-content">
        <div className="wrapper">
          <div className="entry-content">
            <div className="post-listing style-default">
              <CardEpisodes />
              <CardEpisodes />
              <CardEpisodes />
              <CardEpisodes />
              <CardEpisodes />
              <CardEpisodes />
              <CardEpisodes />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <InstaHome />
    </>
  );
};
