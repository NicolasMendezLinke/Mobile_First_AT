import styles from "./PropostasCard.module.css";

const Propostas = () => {
  return (
    <div className={styles.propostasWrapper}>
      <h2 className={styles.propostasTitle} id="propostas">
        PROPOSTAS PRINCIPAIS
      </h2>
      <div className={styles.propostasContainer}>
        <div className={styles.propostaCard}>
          <div className={styles.propostaDescricao}>
            <h3>Educação</h3>
          </div>
          <img
            src="src/assets/estudantes.png"
            alt="Proposta 1"
            className={styles.propostaImagem}
          />
          <div className={styles.propostaDescricao}>
            <p>
              Educação é fundamental, criaremos planos para melhoria da qualidade de escolas públicas
            </p>
          </div>
        </div>

        <div className={styles.propostaCard}>
          <div className={styles.propostaDescricao}>
            <h3>Infraestrutura</h3>
          </div>
          <img
            src="src/assets/infraestrutura.png"
            alt="Proposta 2"
            className={styles.propostaImagem}
          />
          <div className={styles.propostaDescricao}>
            <p>
              Tornaremos do Rio de Janeiro um exemplo de como uma Cidade Brasileira deve ser
            </p>
          </div>
        </div>

        <div className={styles.propostaCard}>
          <div className={styles.propostaDescricao}>
            <h3>Combate à Pobreza</h3>
          </div>
          <img
            src="src/assets/pobreza.png"
            alt="Proposta 3"
            className={styles.propostaImagem}
          />
          <div className={styles.propostaDescricao}>
            <p>
              Criaremos programas para diminuir drasticamente a pobreza no Rio e melhorar a qualidade de vida para todos
            </p>
          </div>
        </div>
        
        <div className={styles.propostaCard}>
          <div className={styles.propostaDescricao}>
            <h3>Serviços Públicos</h3>
          </div>
          <img
            src="src/assets/servicos.png"
            alt="Proposta 4"
            className={styles.propostaImagem}
          />
          <div className={styles.propostaDescricao}>
            <p>
              Melhoraremos a qualidade dos serviços prestados à população, diminuindo problemas como queda de energia ou internet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propostas;
