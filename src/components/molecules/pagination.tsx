export const Pagination = () => {
  return (
    <div className="pagination">
      <span aria-current="page" className="page-numbers current">
        <span className="screen-reader-text">Page </span>1
      </span>
      <a className="page-numbers" href="blog.html">
        <span className="screen-reader-text">Page </span>2
      </a>
      <a className="next page-numbers" href="blog.html">
        <span className="screen-reader-text">Next Page </span>
      </a>
    </div>
  );
};
