import './App.css'
import { Sample540, SampleFeatured, SampleFeaturedVideo, LogoDarkp, Logop} from './assets'

function App() {

  return (
    <>
        <header id="top-header" className="site-header">
          <div className="wrapper">
            <div className="site-identity">
              <a href="index.html" className="custom-logo-link" rel="home" title="Visit homepage"><img src={Logop} className="custom-logo" width="131" height="36" alt="Bateria"/><img src={LogoDarkp} className="custom-logo alt-version" width="131" height="36" alt="Bateria"/></a>
                <p className="site-description screen-reader-text">Premium Podcast HTML Template</p>
              </div>
                <div id="menu-toggle" className="mobile-menu-toggle">
                  <a href="#menu-main" title="Toggle menu"><em className="mdi mdi-menu"></em><em className="mdi mdi-close"></em></a>
                </div>
                <nav className="main-navigation">
                  <ul id="menu-main" className="menu">
                    <li className="menu-item-has-children current-menu-parent">
                      <a href="index.html">Home<em className="mdi mdi-chevron-down"></em></a>
                      <ul className="sub-menu">
                        <li className="current-menu-item"><a href="index.html">Home - Audio</a></li>
                        <li><a href="index-video.html">Home - Video</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="episodes.html">Episodes<em className="mdi mdi-chevron-down"></em></a>
                      <ul className="sub-menu">
                        <li><a href="episodes.html">Episodes (sidebar)</a></li>
                        <li><a href="episodes-grid.html">Episodes (grid)</a></li>
                        <li><a href="episodes-list.html">Episodes (list)</a></li>
                        <li><a href="single-episode.html">Audio episode</a></li>
                        <li><a href="single-episode-video.html">Video episode</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog.html">Blog<em className="mdi mdi-chevron-down"></em></a>
                      <ul className="sub-menu">
                        <li><a href="blog.html">Browse posts</a></li>
                        <li><a href="single-post.html">Single post</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="shop.html">Shop<em className="mdi mdi-chevron-down"></em></a>
                      <ul className="sub-menu">
                        <li><a href="shop.html">Right sidebar (2 cols)</a></li>
                        <li><a href="shop-wide.html">Fullwidth (3 cols)</a></li>
                        <li><a href="shop-cart.html">Cart</a></li>
                        <li><a href="shop-checkout.html">Checkout</a></li>
                        <li><a href="single-product.html">Single product</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="styleguide.html">Features<em className="mdi mdi-chevron-down"></em></a>
                      <ul className="sub-menu">
                        <li><a href="styleguide.html">Styleguide</a></li>
                        <li className="menu-item-has-children">
                          <a href="#">Submenus</a>
                          <ul className="sub-menu">
                            <li><a href="#">Submenu item 1</a></li>
                            <li><a href="#">Submenu item 2</a></li>
                            <li><a href="#">Submenu item 3</a></li>
                          </ul>
                        </li>
                        <li><a href="404.html">404 not found</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                    <li className="menu-item-scheme">
                      <a href="#" title="Toggle color scheme"><em className="mdi mdi-weather-night"></em><em className="mdi mdi-white-balance-sunny"></em><span>Toggle color scheme</span></a>
                    </li>
                    <li className="menu-item-search">
                      <a href="#searchform" title="Toggle search"><em className="mdi mdi-magnify"></em><em className="mdi mdi-close"></em></a>
                      <form className="searchform" method="get" action="blog.html" role="search">
                        <label className="screen-reader-text">Search for:</label>
                        <input type="search" value="" name="s" placeholder="Search&hellip;" />
                          <button type="submit"><em className="mdi mdi-magnify"></em><span className="screen-reader-text">Search</span></button>
                      </form>
                    </li>
                    <li className="menu-item-cart">
                      <a href="shop-cart.html" title="Shopping cart"><em className="mdi mdi-shopping-outline"></em><span className="cart-text">Shopping cart</span><span className="cart-total">3</span></a>
                    </li>
                  </ul>
                </nav>
                <nav className="social-navigation">
                  <ul className="menu">
                    <li><a href="https://twitter.com" title="Twitter profile"><span className="screen-reader-text">Twitter profile</span></a></li>
                    <li><a href="https://instagram.com" title="Instagram profile"><span className="screen-reader-text">Instagram profile</span></a></li>
                    <li><a href="https://youtube.com" title="YouTube page"><span className="screen-reader-text">YouTube page</span></a></li>
                  </ul>
                </nav>
            </div>
        </header>

        <header id="featured" className="site-featured">
          <div id="featured-media" className="featured-media has-overlay">
            <div className="wrapper">
              <div className="featured-episode">
                <div className="featured-episode-text">
                  <p className="text-uppercase text-weight-medium text-opacity-75">Featured Episode</p>
                  <h1 className="display"><a href="single-episode.html">#13: The joy of putting ideas into reality and pen to paper</a></h1>
                  <p>Vince Smith met bandmates Jim Kelly and Nancy Gibbs at a Sex Pistols concert, where he tried to kiss Sid Vicious' guitar and got a bloody nose. Together they formed Aftershock.</p>
                </div>
                <div className="episode-player episode-type-audio">
                  <audio><source src="https://html.liviucerchez.com/common/preview1.mp3" type="audio/mpeg" /><source src="https://html.liviucerchez.com/common/preview1.ogg" type="audio/ogg" /></audio>
                  <div className="media-controls">
                    <button className="media-play-pause"></button>
                    <button className="media-rate" data-rates="1.5 0.5 1" title="Playback speed">1x</button>
                    <span className="media-current-time">00:00</span>
                    <div className="media-time-rail"><span className="media-time-rail-current"></span></div>
                    <span className="media-duration">00:41</span>
                    <a className="media-download" href="https://html.liviucerchez.com/common/preview1.mp3" download title="Download episode (831.6 KB)"></a>
                    <a className="media-transcript" href="#" title="View transcript"></a>
                  </div>
                </div>
              </div>
              <div className="featured-cover">
                <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt=""/><span className="flash">new</span></a>
              </div>
              <div className="featured-actions">
                <div className="featured-actions-main">
                  <a href="#"><span className="mdi mdi-podcast"></span> Subscribe on Apple Podcasts</a>
                  <a href="#"><span className="mdi mdi-rss"></span> Subscribe using RSS Feed</a>
                </div>
                <div className="featured-actions-secondary">
                  <a href="episodes.html">Browse all episodes <span className="mdi mdi-trending-neutral"></span></a>
                </div>
              </div>
            </div>
            <video src="tmp/sample-featured-video2.mp4" poster={SampleFeaturedVideo} preload="metadata" muted autoPlay loop width="1320" height="756"></video>
          </div>
        </header>

        <div id="content" className="site-content">
          <div className="wrapper">
            <div className="entry-content">
              <div className="post-listing style-grid align-content-max">
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
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#12: Visiting my best friend's city for the first time</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Sep 3, 2023</span><span className="updated">Sep 4, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode episode-type-video has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode-video.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode-video.html" rel="bookmark">#11: An interesting watch I would definitely recommend</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Aug 23, 2023</span><span className="updated">Aug 23, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#10: Along the carefree journey through Italy</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Aug 15, 2023</span><span className="updated">Aug 23, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#9: There's always something to do but rest</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Aug 4, 2023</span><span className="updated">Aug 5, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#8: What if my paths go back home</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Jul 29, 2023</span><span className="updated">Jul 29, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#7: Nature's balance must be restored now</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Jul 21, 2023</span><span className="updated">Jul 21, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode episode-type-video has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode-video.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode-video.html" rel="bookmark">#6: The beauty of a clear night sky</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode-video.html" rel="bookmark"><span className="entry-date published">Jun 17, 2023</span><span className="updated">Jun 17, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#5: Some things I'll never forget</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Jun 9, 2023</span><span className="updated">Jun 9, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#4: The serenity of a blue calm sky</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">Jun 2, 2023</span><span className="updated">Jun 2, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#3: It is not easy to stay still and do nothing</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">May 29, 2023</span><span className="updated">May 29, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <article className="entry entry-episode has-post-thumbnail">
                  <div className="entry-media">
                    <a href="single-episode.html" className="shine-on-hover"><img src={Sample540} alt="" width="540" height="540"/></a>
                  </div>
                  <header className="entry-header">
                    <h2 className="entry-title"><a href="single-episode.html" rel="bookmark">#2: On the road again and missing family</a></h2>
                    <div className="entry-meta">
                      <span className="posted-in">
                        <span className="screen-reader-text">Posted in:</span> <em className="mdi mdi-folder-outline"></em> <a href="episodes.html" rel="category tag">Season 1</a>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span> <em className="mdi mdi-calendar-blank"></em> <a href="single-episode.html" rel="bookmark"><span className="entry-date published">May 29, 2023</span><span className="updated">May 29, 2023</span></a></span>
                      </span>
                    </div>
                  </header>
                </article>
                <div className="pagination">
                  <span aria-current="page" className="page-numbers current"><span className="screen-reader-text">Page </span>1</span>
                  <a className="page-numbers" href="episodes.html"><span className="screen-reader-text">Page </span>2</a>
                  <a className="next page-numbers" href="episodes.html"><span className="screen-reader-text">Next Page </span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="site-footer-gallery">
          <div className="wrapper">
            <a href="https://instagram.com/liviucerchez/" target="_blank" className="intro-gallery">
              <span className="intro-gallery-title">Find more personal moments <span className="highlight">on Instagram</span></span>
              <em className="intro-gallery-username">@liviucerchez</em>
            </a>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">3</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">5</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">5</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">2</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">2</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">2</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">9</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <div className="gallery-photo">
              <a href="https://instagram.com/liviucerchez/" target="_blank">
                <img src={Sample540} width="540" height="540" loading="lazy" alt=""/>
                  <span className="data">
                    <span className="meta">
                      <span className="likes"><em className="mdi mdi-heart"></em> <strong className="count">12</strong></span>
                    </span>
                  </span>
              </a>
            </div>
            <a href="https://instagram.com/liviucerchez/" target="_blank" className="outro-gallery"><span>Don't miss daily inspiration and updates</span></a>
          </div>
        </footer>

        <footer className="sales-box">
          <div className="wrapper">
            <div className="sales-box-cover">
              <a href="#" className="shine-on-hover"><img src={Sample540} width="540" height="540" loading="lazy" alt=""/></a>
            </div>
            <div className="sales-box-content">
              <h2>New Stuff Each Week!</h2>
              <p>Listen below and order your copy from Amazon, iTunes or your favorite record store. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseqa untur magni dolores eos qui ratione sequi.</p>
              <p><a href="#" className="button button-primary"><span className="mdi mdi-amazon"></span> Amazon</a> <a href="#" className="button button-primary"><span className="mdi mdi-apple"></span> iTunes</a> <a href="#" className="button button-primary"><span className="mdi mdi-spotify"></span> Spotify</a></p>
            </div>
          </div>
          <img src={SampleFeatured} alt=""/>
        </footer>

        <footer className="site-footer">
          <a id="scroll-to-top" className="scroll-to-top" href="#top-header" title="To the top"><em className="mdi mdi-chevron-up"></em><svg width="150" height="50" viewBox="0 0 39.687499 13.229167"><path d="M-.0035 296.999c9.007 0 11.8302-13.1833 19.8324-13.1852C27.8372 283.8118 30.636 297 39.683 297c9.047 0-48.6935-.001-39.6864-.001z" transform="translate(0,-283.77081)"></path></svg></a>
          <div className="widget-area">
            <div className="widget widget_logo">
              <h3><a href="index.html" className="footer-title">Bateria</a></h3>
            </div>
            <div className="widget widget_nav_menu">
              <nav className="social-navigation">
                <ul className="menu">
                  <li><a href="https://twitter.com"><span className="screen-reader-text">Twitter profile</span></a></li>
                  <li><a href="https://instagram.com"><span className="screen-reader-text">Instagram profile</span></a></li>
                  <li><a href="https://youtube.com"><span className="screen-reader-text">YouTube page</span></a></li>
                </ul>
              </nav>
            </div>
            <div className="widget widget_text">
              <div className="textwidget">
                <h3 className="widget-title">Don't miss our weekly episodes. Subscribe now!</h3>
                <form className="mc4wp-form" method="post" action="index.html">
                  <div className="mc4wp-form-fields">
                    <p>A template with a simple and organized approach to presenting your content with understated charm and undeniable appeal.</p>
                    <p className="one-line">
                      <label  className="sr-only">Subscription Email</label> <input type="email" name="email" id="subscribe_email" placeholder="Your email address..." required /><input type="submit" value="Subscribe" className="button-color button-filled"/>
                      </p>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
            <div className="copyright">
              <p>&copy; 2023 <a href="index.html">Bateria</a> &mdash; Created with &hearts; in Europe. All Rights Reserved. &mdash; <a className="privacy-policy-link" href="#">Privacy Policy</a></p>
            </div>
        </footer>



    </>
  )
}

export default App
