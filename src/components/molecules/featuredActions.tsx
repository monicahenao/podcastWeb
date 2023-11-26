export const FeaturedActions = () => {
  return (
    <div className="featured-actions">
      <div className="featured-actions-main">
        <a href="https://www.apple.com/co/apple-podcasts/">
          <span className="mdi mdi-podcast"></span> Suscríbete a los podcasts de
          Apple
        </a>
        <a href="https://open.spotify.com/genre/podcasts-web">
          <span className="mdi mdi-spotify"></span> Suscríbete a los podcasts de
          Spotify
        </a>
      </div>
      <div className="featured-actions-secondary">
        <a href={`/episodes`}>
          Explora todos los episodios
          <span className="mdi mdi-trending-neutral"></span>
        </a>
      </div>
    </div>
  );
};
