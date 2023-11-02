import { FeaturedActions, NewEpisode } from ".";
import { Sample540, SampleFeaturedVideo } from "../../assets";

export const HeaderHome = () => {
  return (
    <header id="featured" className="site-featured">
      <div id="featured-media" className="featured-media has-overlay">
        <div className="wrapper">
          <NewEpisode />
          <div className="featured-cover">
            <a href={`/singleepisodes`} className="shine-on-hover">
              <img src={Sample540} alt="" />
              <span className="flash">Nuevo</span>
            </a>
          </div>
          <FeaturedActions />
        </div>
        <video
          src="tmp/sample-featured-video2.mp4"
          poster={SampleFeaturedVideo}
          preload="metadata"
          muted
          autoPlay
          loop
          width="1320"
          height="756"
        ></video>
      </div>
    </header>
  );
};
