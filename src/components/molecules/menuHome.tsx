export const MenuHome = () => {

    return(
    <li className="menu-item-has-children current-menu-parent">
        <a href="index.html">Inicio<em className="mdi mdi-chevron-down"></em></a>
            <ul className="sub-menu">
            <li className="current-menu-item"><a href="index.html">Inicio - Audio</a></li>
            <li><a href="index-video.html">Inicio - Video</a></li>
            </ul>
    </li>
    )
}