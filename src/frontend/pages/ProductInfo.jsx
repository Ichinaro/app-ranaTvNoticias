import React from "react";
import { connect } from "react-redux";
import banner from "../images/banner-rana.png";
import Banner from "../components/Banner";
import BadgeInfo from "../components/BadgeInfo";
import './styles/ProductInfo.css'

const ProductInfo = (props) => {
  const { id } = props.match.params;

  return (
    <React.Fragment>
      <div className="container-fluid">
        <Banner banner={banner} />
      </div>
      <div className="container margen grid">
        <div className="pg-noticia-container">
          <BadgeInfo noticia={props.noticias} id={id} />
          <div className="botones">
            <button
              className="btn-regresar"
              onClick={() => props.history.goBack()}
            >
              Regresar
            </button>
            <div 
              className="fb-share-button"
              data-href={`https://ranatv.herokuapp.com/noticia/${id}`}
              data-layout="button" data-size="large">
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Franatv.herokuapp.com%2Fnoticia%2F${id}%2F&amp;src=sdkpreparse`}
                  className="fb-xfbml-parse-ignore">
                    Compartir
                </a>
              </div>
          </div>
        </div>
        <div className="pg-publicidad">
          <a href="https://www.facebook.com/PererosDent-103648597933382" className="pg-publicidad-item">
            <img src="https://i.postimg.cc/x8hDQbFs/Publicidad1.jpg" alt="" />
          </a>
          <a href="https://www.facebook.com/PererosDent-103648597933382" className="pg-publicidad-item">
            <img src="https://i.postimg.cc/x8hDQbFs/Publicidad1.jpg" alt="" />
          </a>
          <a href="https://www.facebook.com/PererosDent-103648597933382" className="pg-publicidad-item">
            <img src="https://i.postimg.cc/x8hDQbFs/Publicidad1.jpg" alt="" />
          </a>
          <a href="https://www.facebook.com/PererosDent-103648597933382" className="pg-publicidad-item">
            <img src="https://i.postimg.cc/x8hDQbFs/Publicidad1.jpg" alt="" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    noticias: state.noticias,
  };
};

export default connect(mapStateToProps, null)(ProductInfo);
