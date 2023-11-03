export const CommentBox = () => {
  return (
    <>
      <div id="comments">
        <div id="respond" className="comment-respond">
          <h3 id="reply-title" className="comment-reply-title">
            Deja tu comentario
          </h3>
          <form
            action="single-post.html"
            method="post"
            id="commentform"
            className="comment-form"
          >
            <p className="comment-notes">
              <span id="email-notes">
                Su dirección de correo electrónico no será publicada.
              </span>{" "}
              Los campos obligatorios están marcados{" "}
              <span className="required">*</span>
            </p>
            <p className="comment-form-comment">
              <label htmlFor="comment">
                Comentario <span className="required">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                cols="45"
                rows="6"
                maxlength="65525"
                required="required"
              ></textarea>
            </p>
            <p className="comment-form-author">
              <label htmlFor="author">
                Nombre <span className="required">*</span>
              </label>{" "}
              <input
                id="author"
                name="author"
                type="text"
                value=""
                size="30"
                maxlength="245"
                required="required"
              />
            </p>
            <p className="comment-form-email">
              <label htmlFor="email">
                Correo electronico <span className="required">*</span>
              </label>{" "}
              <input
                id="email"
                name="email"
                type="email"
                value=""
                size="30"
                maxlength="100"
                aria-describedby="email-notes"
                required="required"
              />
            </p>
            <p className="form-submit">
              <input
                name="submit"
                type="submit"
                id="submit"
                value="Post comment"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
