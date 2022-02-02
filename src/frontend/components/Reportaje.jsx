import React from "react";
import { Link } from "react-router-dom";
import "./styles/Reportaje.css";

const ReportajeItem = (props)=>{
  return (
    <>
      <img src={props.noticia.url} alt="" />
      <div className="general-item">
        <p>{props.noticia.titulo}</p>
      </div>
    </>
  );
}

function Reportaje(props) {
  const noticias = props.noticias;
  const reportaje = noticias.filter((noticia) => {
    return noticia.categoria.includes("Local");
  });
  const news = [reportaje[0], reportaje[1], reportaje[2], reportaje[3]];

  if (reportaje.length > 0) {
    return (
      <ul className="contenedor-news-g">
        {news.map((noticia) => {
          return (
            <li className="general" key={noticia._id}>
              <Link to={`/noticia/${noticia._id}`}>
                <ReportajeItem noticia={noticia} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>No hay datos</p>;
  }
}

export default Reportaje;
//Crea una lista con todos los BadgesListItem y se exporta a Badges
