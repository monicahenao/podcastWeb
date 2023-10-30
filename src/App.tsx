import './App.css'
import { Sample540, SampleFeatured, SampleFeaturedVideo } from './assets';
import { Header, Footer } from './components/organisms';
import { FeaturedActions, NewEpisode, PostEpisode, PhotoGallery } from './components/molecules';

function App() {

  return (
    <>
      <Header/>
        <header id="featured" className="site-featured">
          <div id="featured-media" className="featured-media has-overlay">
            <div className="wrapper">
              <NewEpisode/>
              <div className="featured-cover">
                <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt=""/><span className="flash">Nuevo</span></a>
              </div>
              <FeaturedActions/>
            </div>
            <video src="tmp/sample-featured-video2.mp4" poster={SampleFeaturedVideo} preload="metadata" muted autoPlay loop width="1320" height="756"></video>
          </div>
        </header>

        <div id="content" className="site-content">
          <div className="wrapper">
            <div className="entry-content">
              <div className="post-listing style-grid align-content-max">
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <PostEpisode/>
                <div className="pagination">
                  <span aria-current="page" className="page-numbers current"><span className="screen-reader-text">Página </span>1</span>
                  <a className="page-numbers" href="episodes.html"><span className="screen-reader-text">Página </span>2</a>
                  <a className="next page-numbers" href="episodes.html"><span className="screen-reader-text">Próxima página </span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="site-footer-gallery">
          <div className="wrapper">
            <a href="https://instagram.com/" target="_blank" className="intro-gallery">
              <span className="intro-gallery-title">Encuentra mas momentos de Realidad Code-ficada <span className="highlight">en Instagram</span></span>
              <em className="intro-gallery-username">@RealidadCode-ficada</em>
            </a>
            <PhotoGallery/>
            <PhotoGallery/>
            <PhotoGallery/>
            <PhotoGallery/>
            <PhotoGallery/>
            <PhotoGallery/>
            <PhotoGallery/>
            <PhotoGallery/>
            <a href="https://instagram.com/" target="_blank" className="outro-gallery"><span>No te pierdas la información y las actualizaciones</span></a>
          </div>
        </footer>

        <footer className="sales-box">
          <div className="wrapper">
            <div className="sales-box-cover">
              <a href="#" className="shine-on-hover"><img src={Sample540} width="540" height="540" loading="lazy" alt=""/></a>
            </div>
            <div className="sales-box-content">
              <h2>New Stuff Each Week!</h2>
              <p>Listen below and order your copy from Amazon, iTunes or your favorite record store. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseqa untur magni dolores eos qui ratione sequi.</p>
              <p><a href="#" className="button button-primary"><span className="mdi mdi-amazon"></span> Amazon</a> <a href="#" className="button button-primary"><span className="mdi mdi-apple"></span> iTunes</a> <a href="#" className="button button-primary"><span className="mdi mdi-spotify"></span> Spotify</a></p>
            </div>
          </div>
          <img src={SampleFeatured} alt=""/>
        </footer>
        <Footer/>
    </>
  )
}

export default App
