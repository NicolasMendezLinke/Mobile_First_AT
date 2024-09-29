import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content"
      id="Contato">
        <div className="form-header">
          <h3 className="form-title">Gostaria de entrar em contato? Preencha o formulario!</h3>
        </div>

        <form className="newsletter-form">
          <input type="text" placeholder="Nome" className="form-input" />
          <input type="email" placeholder="E-mail" className="form-input" />
          <input type="text" placeholder="Mensagem" className="form-input" />
          <button type="submit" className="form-submit-btn">
            Enviar
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
