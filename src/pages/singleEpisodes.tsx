import { Sample540, SampleFeatured } from "../assets";
import { CommentBox } from "../components/molecules";
import { AuthorBox } from "../components/molecules/authorBox";

export const SingleEpisodes = () => {
  return (
    <div>
      <a href={`/singleepisodes`} />
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="featured-episode">
              <div className="featured-episode-text">
                <h1 className="display">
                  #1: Presentación del pordcast Realidad Code-ficada
                </h1>
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="posted-in">
                      <span className="screen-reader-text">Posted in:</span>{" "}
                      <em className="mdi mdi-folder-outline"></em>{" "}
                      <a href={`/episodes`} rel="category tag">
                        Season 1
                      </a>
                    </span>
                    <span className="posted-on">
                      <span className="screen-reader-text">Posted on</span>{" "}
                      <em className="mdi mdi-calendar-blank"></em>{" "}
                      <a href={`/singleepisodes`} rel="bookmark">
                        <span className="entry-date published">
                          Sep 3, 2023
                        </span>
                        <span className="updated">Sep 4, 2023</span>
                      </a>
                    </span>
                    <span className="tags">
                      <span className="screen-reader-text">Tags:</span>{" "}
                      <em className="mdi mdi-tag-outline"></em>{" "}
                      <a href={`/episodes`} rel="tag">
                        clothes
                      </a>
                      <span>, </span>
                      <a href={`/episodes`} rel="tag">
                        travel
                      </a>
                      <span>, </span>
                      <a href={`/episodes`} rel="tag">
                        solo
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="episode-player episode-type-audio">
                <audio>
                  <source
                    src="https://html.liviucerchez.com/common/preview1.mp3"
                    type="audio/mpeg"
                  />
                  <source
                    src="https://html.liviucerchez.com/common/preview1.ogg"
                    type="audio/ogg"
                  />
                </audio>
                <div className="media-controls">
                  <button className="media-play-pause"></button>
                  <button
                    className="media-rate"
                    data-rates="1.5 0.5 1"
                    title="Playback speed"
                  >
                    1x
                  </button>
                  <span className="media-current-time">00:00</span>
                  <div className="media-time-rail">
                    <span className="media-time-rail-current"></span>
                  </div>
                  <span className="media-duration">00:41</span>
                  <a
                    className="media-download"
                    href="https://html.liviucerchez.com/common/preview1.mp3"
                    download
                    title="Download episode (831.6 KB)"
                  ></a>
                </div>
              </div>
            </div>
            <div className="featured-cover">
              <a className="shine-on-hover">
                <img src={Sample540} alt="" />
              </a>
            </div>
          </div>
          <img src={SampleFeatured} alt="" />
        </div>
      </header>
      <div id="content" className="site-content">
        <div className="wrapper">
          <div className="entry-content">
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <h6>Main discussed topics</h6>
            <p>
              I throw myself down among the tall grass by the trickling stream;
              and, as I lie close to the earth, a thousand unknown plants are
              noticed by me: when I hear the buzz of the little world among the
              stalks, and grow familiar with the countless indescribable forms
              of the insects and flies.
            </p>
            <p>
              And then, my friend, when darkness overspreads my eyes, and heaven
              and earth seem to dwell in my soul and absorb its power, like the
              form of a beloved mistress, then I often think with longing, Oh,
              would I could describe these conceptions, could impress upon paper
              all that is living so full and warm within me, that it might be
              the mirror of my soul, as my soul is the mirror of the infinite
              God!
            </p>
            <p>
              O my friend — but it is too much for my strength — I sink under
              the weight of the splendor of these visions:
            </p>
            <ul>
              <li>
                who are so beguiled and demoralized by the charms of pleasure of
                the moment;
              </li>
              <li>
                so blinded by desire, that they cannot foresee the pain and
                trouble that are bound to ensue;
              </li>
              <li>
                and equal blame belongs to those who fail in their duty through
                weakness of will, which is the same as saying through shrinking
                from toil and pain.
              </li>
            </ul>
            <figure className="block-image alignwide shine-on-children-hover">
              <a href="tmp/sample-featured.jpg" data-fancybox="test-gallery">
                <img src={SampleFeatured} alt="" />
              </a>
            </figure>
            <p>
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and
            </p>
            <AuthorBox />
            <CommentBox />
          </div>
        </div>
      </div>
    </div>
  );
};
