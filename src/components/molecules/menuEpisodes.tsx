export const MenuEpisodes = () => {

    return (
        <li className="menu-item-has-children">
            <a href="episodes.html">Episodios<em className="mdi mdi-chevron-down"></em></a>
                <ul className="sub-menu">
                    <li><a href="episodes.html">Episodios (sidebar)</a></li>
                    <li><a href="episodes-grid.html">Episodios (grid)</a></li>
                    <li><a href="episodes-list.html">Episodios (list)</a></li>
                    <li><a href="single-episode.html">Audio Episodio</a></li>
                    <li><a href="single-episode-video.html">Video Episodio</a></li>
                </ul>
        </li>
    )
}