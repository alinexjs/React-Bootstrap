import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbar/navbar";

export default function Contato() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 mt-10">Entre em Contato ☕</h1>

      <div className="row">
        <div className="col-md-5 mb-4">
          <h4 className="mb-3">Informações</h4>
          <p>
            <strong>Endereço:</strong> Rua do Café, 123 - Centro
          </p>
          <p>
            <strong>Telefone:</strong> (88) 98765-4321
          </p>
          <p>
            <strong>Email:</strong> contato@cafeteria.com
          </p>
          <p>
            <strong>Horário:</strong> Seg - Sáb: 08h - 20h
          </p>

          <h5 className="mt-4">Redes Sociais</h5>
          <a href="https://facebook.com" className="me-3">
            Facebook
          </a>
          <a href="https://instagram.com" className="me-3">
            Instagram
          </a>
          <a href="https://wa.me/5511987654321">WhatsApp</a>
        </div>

        <div className="col-md-7">
          <h4 className="mb-3">Envie sua mensagem</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mensagem</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Escreva sua mensagem..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "rgba(92, 46, 34, 1)",
                borderColor: "rgba(92, 46, 34, 1)",
                color: "#fff",
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-center mb-3">Nos Encontre Aqui</h4>
        <div className="ratio ratio-16x9">
          <iframe
            title="Mapa da Cafeteria"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508716.8902421046!2d-40.17782333369223!3d-5.046765859078823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bde94d78205c39%3A0x4b2e65dcdf1966f3!2sBoa%20Viagem%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1757939414350!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
