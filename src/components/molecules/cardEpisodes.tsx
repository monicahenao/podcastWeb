import { Sample540 } from "../../assets";

export const CardEpisodes = () => {
  return (
    <>
      <article className="entry entry-episode has-post-thumbnail">
        <div className="entry-media">
          <a href={`/singleepisodes`} className="shine-on-hover">
            <img src={Sample540} alt="" width="540" height="540" />
          </a>
        </div>
        <div className="entry-text">
          <header className="entry-header">
            <div className="entry-meta">
              <span className="posted-in">
                <span className="screen-reader-text">Posted in:</span>
                <em className="mdi mdi-folder-outline"></em>
                <a href={`/episodes`} rel="category tag">
                  Temporada 1
                </a>
              </span>
              <span className="posted-on">
                <span className="screen-reader-text">Posted on</span>
                <em className="mdi mdi-calendar-blank"></em>
                <a href={`/singleepisodes`} rel="bookmark">
                  <span className="entry-date published">Sep 3, 2023</span>
                  <span className="updated">Sep 4, 2023</span>
                </a>
              </span>
              <span className="tags">
                <span className="screen-reader-text">Tags:</span>
                <em className="mdi mdi-tag-outline"></em>
                <a href={`/episodes`} rel="tag">
                  Introducción
                </a>
                <span>, </span>
                <a href={`/episodes`} rel="tag">
                  Podcast
                </a>
              </span>
            </div>
            <h2 className="entry-title">
              <a href={`/singleepisodes`} rel="bookmark">
                #1: Presentación del pordcast Realidad Codificada
              </a>
            </h2>
          </header>
          <div className="entry-audio">
            <div className="episode-player episode-type-audio">
              <audio>
                <source
                  src="https://html.liviucerchez.com/common/preview2.mp3"
                  type="audio/mpeg"
                />
                <source
                  src="https://html.liviucerchez.com/common/preview2.ogg"
                  type="audio/ogg"
                />
              </audio>
              <div className="media-controls">
                <button className="media-play-pause"></button>
                <span className="media-current-time">00:00</span>
                <div className="media-time-rail">
                  <span className="media-time-rail-current"></span>
                </div>
                <span className="media-duration">00:44</span>
              </div>
            </div>
          </div>
          <div className="entry-excerpt">
            <p>
              En este primer episodio del podcast tenemos un invitado muy
              especial, donde nos hablará de su experiencia, cómo llegó a ser un
              exitoso empresario y visión del mundo de la tecnología.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};
