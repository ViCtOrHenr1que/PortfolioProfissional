import React from 'react'
import "./about.css"
import ME from '../../assets/mee.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


 

const About = () => {
  return (
    <section id="about">
      <h5>Para saber mais</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Foto do desenvolvedor do Site" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>1+ Ano</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>10+ clientes</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>10+ Completados</small>
            </article>
          </div>
          <p>
            Meu nome é Victor Henrique, e sou um desenvolvedor FullStack
            dedicado a crescer profissionalmente e pessoalmente. Atualmente,
            estou estudando o primeiro semestre do curso de Engenharia de Software
            na UTFPR e cursei até último semestre do curso de Gestão de Tecnologia
            da Informação na FATEC, uma instituição renomada que oferece uma
            ampla gama de habilidades técnicas e de gerenciamento de projetos.
            <br />
            Além disso, estou cursando meu quinto semestre de inglês na escola
            de idiomas Wizard, um investimento que estou fazendo para me tornar
            mais competitivo no mercado de trabalho global. Eu acredito que ter
            fluência em inglês pode abrir muitas portas e me permitir trabalhar
            em projetos internacionais.
            <br />
            Como desenvolvedor FullStack, meu objetivo é criar interfaces
            intuitivas e responsivas que sejam acessíveis a todas as pessoas,
            independentemente de suas habilidades ou limitações. Eu também gosto
            de estar sempre aprendendo novas tecnologias e experimentando novos
            desafios, pois isso me mantém motivado e me permite expandir minhas
            habilidades.
            <br />
            Em resumo, sou um profissional apaixonado por programação e dedicado
            a criar soluções inovadoras e eficazes para as necessidades de meus
            clientes e usuários finais.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default About