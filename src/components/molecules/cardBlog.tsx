import { Sample540 } from "../../assets";

export const CardBlog = () => {
  return (
    <article className="entry entry-episode has-post-thumbnail">
      <div className="entry-media">
        <a href={`/singleblog`} className="shine-on-hover">
          <img src={Sample540} alt="" width="540" height="540" />
        </a>
      </div>
      <div className="entry-text">
        <header className="entry-header">
          <h2 className="entry-title">
            <a href={`/singleblog`} rel="bookmark">
              Startups disrupting the norms in 2023
            </a>
          </h2>
          <div className="entry-meta">
            <span className="posted-in">
              <span className="screen-reader-text">Posted in:</span>
              <em className="mdi mdi-folder-outline"></em>
              <a href={`/singleblog`} rel="category tag">
                Interviews
              </a>
            </span>
            <span className="posted-on">
              <span className="screen-reader-text">Posted on</span>
              <em className="mdi mdi-calendar-blank"></em>
              <a href={`/singleblog`} rel="bookmark">
                <span className="entry-date published">Jun 3, 2023</span>
                <span className="updated">Jun 4, 2023</span>
              </a>
            </span>
          </div>
        </header>
        <div className="entry-excerpt">
          <p>
            Lotus root water spinach fennel kombu maize bamboo shoot green bean
            swiss chard onion chickpea gram corn pea coriander water chestnut.
          </p>
          <a href={`/singleblog`} className="read-more">
            Read post <em className="mdi mdi-trending-neutral"></em>
          </a>
        </div>
      </div>
    </article>
  );
};
