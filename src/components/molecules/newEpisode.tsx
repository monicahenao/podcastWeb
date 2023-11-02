export const NewEpisode = () => {
  return (
    <div className="featured-episode">
      <div className="featured-episode-text">
        <p className="text-uppercase text-weight-medium text-opacity-75">
          Episodio Nuevo
        </p>
        <h1 className="display">
          <a href="single-episode.html">
            #1: Presentación del pordcast Realidad Code-ficada
          </a>
        </h1>
        <p>
          En este primer episodio del podcast tenemos un invitado muy especial,
          donde nos hablará de su experiencia, cómo llegó a ser un exitoso
          empresario y visión del mundo de la tecnología.
        </p>
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
          <a className="media-transcript" href="#" title="View transcript"></a>
        </div>
      </div>
    </div>
  );
};
