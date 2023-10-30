import { Sample540 } from "../../assets";

export const PostEpisode = () => {

    return(
        <article className="entry entry-episode has-post-thumbnail">
            <div className="entry-media">
                <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
            </div>
            <header className="entry-header">
                <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#13: The joy of putting ideas into reality and pen to paper</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Sep 13, 2023</span><span className="updated">Sep 13, 2023</span></a>
                        </span>
                      </span>
                    </div>
            </header>
         </article>
    )
}