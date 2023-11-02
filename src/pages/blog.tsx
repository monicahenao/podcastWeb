import { SampleFeatured } from "../assets";
import { FooterHome, Pagination } from "../components/molecules";
import { CardBlog } from "../components/molecules/cardBlog";

export const Blog = () => {
  return (
    <>
      <a href={`/blog`} />
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="page-title">
              <h1 className="display">Blog</h1>
              <h6 className="tagline">
                Manténgase al día con nuestras últimas actualizaciones
              </h6>
            </div>
          </div>
          <img src={SampleFeatured} alt="" />
        </div>
      </header>
      <div id="content" className="site-content">
        <div className="wrapper">
          <div className="entry-content">
            <div className="post-listing style-grid align-content-max">
              <CardBlog />
              <CardBlog />
              <CardBlog />
              <CardBlog />
              <CardBlog />
              <CardBlog />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
};
