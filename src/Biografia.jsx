import styles from "./Biografia.module.css";

const Biografia = () => {
  return (
    <div className={styles.biografiaContainer}>
      <div className={styles.BioCard}>
        <img
          src="src/assets/Marco.png"
          alt="Marco Madureira"
          className={styles.biografiaImagem}
          id="biografia"
        />
        <div className={styles.biografiaTexto}>
          <h2>Quem é Marco Madureira?</h2>
          <p>
            Marco Madureira é um político comprometido com a justiça social e a sustentabilidade. Nascido em uma pequena cidade, ele se formou em Ciências Políticas e começou sua carreira como ativista comunitário, lutando por melhores condições de vida para todos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
