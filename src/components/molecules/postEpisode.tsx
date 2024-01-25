import { Sample540 } from "../../assets";

export const PostEpisode = () => {
  return (
    <article className="entry entry-episode has-post-thumbnail">
      <div className="entry-media">
        <a href={`/singleepisodes`} className="shine-on-hover">
          <img src={Sample540} alt="" width="540" height="540" />
        </a>
      </div>
      <header className="entry-header">
        <h2 className="entry-title">
          <a href={`/singleepisodes`} rel="bookmark">
            #1: Presentación del pordcast Realidad Codificada
          </a>
        </h2>
        <div className="entry-meta">
          <span className="posted-in">
            <span className="screen-reader-text">Posteado en:</span>
            <em className="mdi mdi-folder-outline"></em>
            <a href={`/episodes`} rel="category tag">
              Temporada 1
            </a>
            <span className="posted-on">
              <span className="screen-reader-text">Postaeado en:</span>
              <em className="mdi mdi-calendar-blank"></em>
              <a href={`/singleepisodes`} rel="bookmark">
                <span className="entry-date published">Sep 13, 2023</span>
                <span className="updated">Sep 13, 2023</span>
              </a>
            </span>
          </span>
        </div>
      </header>
    </article>
  );
};
