import { Sample540 } from "../../assets";

export const PhotoGallery = () => {

    return(
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
    )
}