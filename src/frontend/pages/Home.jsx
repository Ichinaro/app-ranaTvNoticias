import React from "react";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import banner from "../images/banner-rana.png";
import Banner from "../components/Banner";
import Contacto from "../components/Contacto";
import NotiList from "../components/NotiList";
import Category from "../components/Category";
import Reportaje from "../components/Reportaje";
import Titular from "../components/Titular";
import './styles/Home.css'

const Home = (props) => {
  const { stream, noticias } = props;
  
  function locales() {
    const locales = noticias.filter((noticia) =>
      noticia.categoria.includes("Local")
    );
    return [locales[0], locales[1], locales[2], locales[3]];
  }

  function nacional() {
    const locales = noticias.filter((noticia) =>
      noticia.categoria.includes("Nacional")
    );
    return [locales[0], locales[1], locales[2], locales[3]];
  }

  function internacional() {
    const locales = noticias.filter((noticia) =>
      noticia.categoria.includes("Internacional")
    );
    return [locales[0], locales[1], locales[2], locales[3]];
  }

  function deportes() {
    const valor = noticias.filter((noticia) =>
      noticia.categoria.includes("Deportes")
    );
    return [valor[0], valor[1], valor[2], valor[3]];
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>RanaTv</title>
        <meta property="og:url" content="https://ranatv.herokuapp.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RanaTV"/>
        <meta property="og:description" content="Noticias"/>
        <meta property="og:image" content="https://scontent.fmch2-1.fna.fbcdn.net/v/t39.30808-6/229798347_4853783284636688_5860767665755358455_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=diFpyMDm5ZQAX-BVCoS&_nc_ht=scontent.fmch2-1.fna&oh=00_AT-p26lPvLCHhCDN9G_dyqyP1u2yRCGPyNVEwKbIi8q3LA&oe=61FB2877" />
      </Helmet>
      <div className="conatiner">
        <Banner banner={banner} />
      </div>
      <div className="container margen">
        <Titular titulares={noticias} stream={stream} />
        <Reportaje noticias={noticias} />
      </div>
      <div className="container">
        <Contacto />
      </div>
      <div className="constainer margen">
        <Category title="Noticias Locales" param="Local">
          <ul className="noticias-container">
            <NotiList noticias={locales()} category="Local" />
          </ul>
        </Category>
        <Category title="Noticias Nacionales" param="Nacional" >
          <ul className="noticias-container">
            <NotiList noticias={nacional()} category="Nacional" />
          </ul>
        </Category>
        <Category title="Noticias Internacionales" param="Internacional" >
          <ul className="noticias-container">
            <NotiList noticias={internacional()} category="Internacional" />
          </ul>
        </Category>
        <Category title="Deportes" param="Deportes" >
          <ul className="noticias-container">
            <NotiList noticias={deportes()} category="Deportes" />
          </ul>
        </Category>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    noticias: state.noticias,
    stream: state.stream,
  };
};

export default connect(mapStateToProps, null)(Home);
