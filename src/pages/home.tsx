import {
  PostEpisode,
  FooterHome,
  HeaderHome,
  InstaHome,
  Pagination,
} from "../components/molecules";

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <div id="content" className="site-content">
        <div className="wrapper">
          <div className="entry-content">
            <div className="post-listing style-grid align-content-max">
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <PostEpisode />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <InstaHome />
      <FooterHome />
    </>
  );
};
