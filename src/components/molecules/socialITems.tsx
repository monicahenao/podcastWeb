export const SocialItems = () => {
  return (
    <nav className="social-navigation">
      <ul className="menu">
        <li>
          <a href="https://twitter.com" title="Perfil de X">
            <span className="screen-reader-text">Perfil de X</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" title="Perfil de Instagram">
            <span className="screen-reader-text">Perfil de Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://youtube.com" title="Página de YouTube">
            <span className="screen-reader-text">Página de YouTube</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
