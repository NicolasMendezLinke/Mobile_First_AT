import styles from "./PropostasLista.module.css"; 
const PropostasLista = () => {
  return (
    <div className={styles.propostasSection}>
      <ul>
        <li>
          <h3 className={styles.propostaTitle}>Ampliação do acesso à educação de qualidade, com investimentos em escolas e formação de professores.</h3>         
        </li>
        <li>
          <h3 className={styles.propostaTitle}>Implementação de um sistema de saúde universal que prioriza a prevenção e o atendimento humanizado.</h3>
        </li>
        <li>
          <h3 className={styles.propostaTitle}>Incentivo ao uso de energias renováveis e à criação de projetos de eficiência energética nas comunidades.</h3>
        </li>
        <li>
          <h3 className={styles.propostaTitle}>Criação de programas para garantir acesso à tecnologia e à internet em todas as escolas e comunidades carentes.</h3>
        </li>
        <li>
          <h3 className={styles.propostaTitle}>Implementação de um sistema de saúde universal que prioriza a prevenção e o atendimento humanizado.</h3>
        </li>
      </ul>
    </div>
  );
};

export default PropostasLista;