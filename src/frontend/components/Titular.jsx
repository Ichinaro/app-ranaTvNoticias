import React from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
import "./styles/Titular.css";

function Titular(props) {
  const stream = props.stream
  const titulares = props.titulares;
  const reportaje = titulares.filter((noticia) =>
    noticia.categoria.includes("Local")
  );

  const news = reportaje[0];

  if (reportaje.length > 0) {
    return (
      <div className="header">
        {stream.length ? 
        <div className="player-home">
          <Player ancho='100%' alto='100%' url={stream[0].live} />
        </div>  :
        <div className="titular-item">
          <Link to={`/noticia/${news._id}`} className="imagen-noticia">
            <img src={news.url} alt=""/>
          </Link>
          <h2 className="titulo-noticia">
            {news.titulo}
          </h2>
        </div> }
        <div className="publicidad-items">
          <div className="publicidad">
            <a href="https://www.facebook.com/PererosDent-103648597933382" >
              <img src="https://i.postimg.cc/x8hDQbFs/Publicidad1.jpg" alt=""/>
            </a>
          </div>
          <div className="publicidad">
            <a href="https://www.facebook.com/RANARADIOTV" >
              <img src="https://scontent.fmch2-1.fna.fbcdn.net/v/t1.6435-9/77017767_3104120362936331_194080191897665536_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=RDsIUXv3vnoAX-yCFWX&_nc_ht=scontent.fmch2-1.fna&oh=00_AT_q_fySwDvykNU_iO4IradyBJpvPrFhyqx6fPcp_lDIwg&oe=621CB0F3" alt=""/>
            </a>
          </div>
          <div className="publicidad">
            <a href="https://www.facebook.com/RANARADIOTV" >
              <img src="https://scontent.fmch2-1.fna.fbcdn.net/v/t1.6435-9/84327682_3275091669172532_6632766605652656128_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=VikE-RUzzxQAX_t4aXx&_nc_ht=scontent.fmch2-1.fna&oh=00_AT-p23RsFB4rEGe4b2Z7YgX467VjTRgcIGOLDOMCrRs5mg&oe=621DF329" alt=""/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Titular;
