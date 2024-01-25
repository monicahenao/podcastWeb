import { Sample540, SampleFeatured } from "../assets";
import { AuthorBox } from "../components/molecules/authorBox";

export const SingleEpisodes = () => {
  return (
    <div>
      <a href={`/singleepisodes`} />
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="featured-episode">
              <div className="featured-episode-text">
                <h1 className="display">
                  #1: Presentación del pordcast Realidad Codificada
                </h1>
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="posted-in">
                      <span className="screen-reader-text">Posted in:</span>
                      <em className="mdi mdi-folder-outline"></em>
                      <a href={`/episodes`} rel="category tag">
                        Temporada 1
                      </a>
                    </span>
                    <span className="posted-on">
                      <span className="screen-reader-text">Posteado en:</span>
                      <em className="mdi mdi-calendar-blank"></em>
                      <a href={`/singleepisodes`} rel="bookmark">
                        <span className="entry-date published">
                          Sep 3, 2023
                        </span>
                        <span className="updated">Sep 4, 2023</span>
                      </a>
                    </span>
                    <span className="tags">
                      <span className="screen-reader-text">Tags:</span>
                      <em className="mdi mdi-tag-outline"></em>
                      <a href={`/episodes`} rel="tag">
                        Introdrucción
                      </a>
                      <span>, </span>
                      <a href={`/episodes`} rel="tag">
                        Podcast
                      </a>
                      <span>, </span>
                      <a href={`/episodes`} rel="tag">
                        Tecnología
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="episode-player episode-type-audio">
                <audio>
                  <source
                    src="https://html.liviucerchez.com/common/preview1.mp3"
                    type="audio/mpeg"
                  />
                  <source
                    src="https://html.liviucerchez.com/common/preview1.ogg"
                    type="audio/ogg"
                  />
                </audio>
                <div className="media-controls">
                  <button className="media-play-pause"></button>
                  <button
                    className="media-rate"
                    data-rates="1.5 0.5 1"
                    title="Playback speed"
                  >
                    1x
                  </button>
                  <span className="media-current-time">00:00</span>
                  <div className="media-time-rail">
                    <span className="media-time-rail-current"></span>
                  </div>
                  <span className="media-duration">00:41</span>
                  <a
                    className="media-download"
                    href="https://html.liviucerchez.com/common/preview1.mp3"
                    download
                    title="Download episode (831.6 KB)"
                  ></a>
                </div>
              </div>
            </div>
            <div className="featured-cover">
              <a className="shine-on-hover">
                <img src={Sample540} alt="" />
              </a>
            </div>
          </div>
          <img src={SampleFeatured} alt="" />
        </div>
      </header>
      <div id="content" className="site-content">
        <div className="wrapper">
          <div className="entry-content">
            <p>
              ¡Bienvenidos a Realidad Codificada, el espacio donde exploramos el
              fascinante mundo de la tecnología! Soy Daniel Castaño y Valentina
              Zapata, sus anfitriones entusiastas, y estamos emocionados de
              sumergirnos juntos en las últimas novedades, innovaciones y
              tendencias que están dando forma al futuro digital.
            </p>
            <h6>Main discussed topics</h6>
            <p>
              Desde gadgets sorprendentes hasta avances científicos,
              analizaremos cómo la tecnología está transformando nuestra forma
              de vivir, trabajar y comunicarnos. ¿Te preguntas qué hay de nuevo
              en inteligencia artificial, realidad virtual, o la próxima
              revolución en la industria? Este es el lugar donde encontrarás
              respuestas.
            </p>
            <p>
              Cada semana, exploraremos entrevistas con expertos, desglosaremos
              noticias tecnológicas candentes y compartiremos consejos prácticos
              para aprovechar al máximo la tecnología en tu vida cotidiana. ¡Así
              que prepárate para un viaje emocionante a través del universo
              tecnológico en Realidad Codificada!
            </p>
            <p>
              En cada episodio, nos sumergiremos en los avances más recientes,
              desde la inteligencia artificial hasta las últimas tendencias en
              dispositivos móviles y más allá. Conversaremos con expertos de la
              industria, exploraremos los límites de la innovación y
              descubriremos cómo estos avances están dando forma a nuestro
              presente y futuro.
            </p>
            <p>
              Pero no solo nos detendremos en las noticias y desarrollos
              tecnológicos. También exploraremos el impacto social, ético y
              cultural de la tecnología en nuestra vida diaria. ¿Cómo afecta la
              inteligencia artificial a la forma en que trabajamos? ¿Qué
              implicaciones tiene la realidad virtual en nuestra percepción del
              mundo? Estas son solo algunas de las preguntas que exploraremos en
              cada episodio.
            </p>
            <p>
              Además, compartiremos consejos prácticos, reseñas de productos y
              experiencias personales para ayudarte a aprovechar al máximo la
              tecnología en tu día a día. Ya sea que seas un entusiasta de la
              tecnología o simplemente estés buscando mantenerte al día con las
              últimas novedades, este podcast es tu puerta de entrada a un
              fascinante viaje por el universo tecnológico.
            </p>
            <figure className="block-image alignwide shine-on-children-hover">
              <a href="tmp/sample-featured.jpg" data-fancybox="test-gallery">
                <img src={SampleFeatured} alt="" />
              </a>
            </figure>
            <p>
              Así que únete a nosotros cada semana en Realidad Codificada, donde
              la tecnología se encuentra con la curiosidad y la innovación se
              encuentra con la conversación. ¡Estamos emocionados de tenerte a
              bordo en este emocionante viaje tecnológico!
            </p>
            <AuthorBox />
          </div>
        </div>
      </div>
    </div>
  );
};
