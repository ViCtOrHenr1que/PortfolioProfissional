import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e4or8ca', 'template_1i5lyuo', form.current, 'XycPGXYD20TvZg_ia')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__opitions">
          <article className="contact__opition">
            <MdOutlineEmail className="contact__opition-icon" />
            <h4>Email</h4>
            <h5>v.henriquedasilva10@gmail.com</h5>
            <a
              href="mailto:v.henriquedasilva10@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma mensagem
            </a>
          </article>

          <article className="contact__opition">
            <BsLinkedin className="contact__opition-icon" />
            <h4>LinkedIn</h4>
            <h5>Victor Henrique</h5>
            <a
              href="https://www.linkedin.com/in/victor-henrique-7952b4211/"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma mensagem
            </a>
          </article>

          <article className="contact__opition">
            <BsWhatsapp className="contact__opition-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 11 91234-5678</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+551191234-5678"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma mensagem
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
          />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn-form">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact