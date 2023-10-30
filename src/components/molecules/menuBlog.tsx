export const MenuBlog = () => {

    return(
        <li className="menu-item-has-children">
            <a href="blog.html">Blog<em className="mdi mdi-chevron-down"></em></a>
                <ul className="sub-menu">
                    <li><a href="blog.html">Buscar Publicación</a></li>
                    <li><a href="single-post.html">Publicación</a></li>
                </ul>
        </li>
    )
}