import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/projeto_aluroni.png'
import IMG2 from '../../assets/TwitterUI.png'
import IMG3 from '../../assets/Ocean.jpeg'
import IMG4 from '../../assets/organo.png'
import IMG5 from '../../assets/Cronometro.png'
import IMG6 from '../../assets/portfolio6.jpg'





const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meu trabalho recente</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Aluroni" />
          </div>
          <h3>Restaurante Aluroni </h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ViCtOrHenr1que/RestauranteAluroni"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://restaurante-aluroni-rho.vercel.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Imagem do projeto Clone UI do Twitter" />
          </div>
          <h3>TwitterUI</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ViCtOrHenr1que/TwitterClone"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://twitter-clone-rho-khaki.vercel.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Imagem do projeto Ocean" />
          </div>
          <h3>Ocean</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ViCtOrHenr1que/Ocean"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://ocean-virid.vercel.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Imagem do projeto Organograma de Times" />
          </div>
          <h3> Organograma de Times </h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ViCtOrHenr1que/OrganogramaDeTimes"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://organograma-de-times.vercel.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Imagem do projeto Cronometro com Timer" />
          </div>
          <h3>Cronômetro com Timer</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ViCtOrHenr1que/CronometroComTimer"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://cronometro-com-timer.vercel.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Imagem do projeto Dashboard responsivo" />
          </div>
          <h3>Dashboard Responsivo </h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ViCtOrHenr1que/responsiveDashboard"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://responsive-dashboard-qeapfamr7-victorhenr1que.vercel.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio