import "./Agenda.css";

const Agenda = () => {
  return (
    <div className="agenda-section">
      <h2 className="agenda-title" id="agenda">
        Agenda
      </h2>
      <div className="agenda-cards">
        <div className="agenda-card">
          <div className="agenda-sub">
            <h3 className="agenda-date">15/10/2024</h3>
            <div className="agenda-name-description">
              <span className="agenda-name">
                Encontro com Eleitores
              </span>
              <p className="agenda-description">
                Uma oportunidade para Marco Madureira se reunir com os eleitores locais, ouvir suas preocupações e compartilhar suas propostas para o futuro da comunidade. O evento contará com um momento aberto para perguntas e sugestões.
              </p>
            </div>
          </div>
        </div>
        <div className="agenda-card">
          <div className="agenda-sub">
            <h3 className="agenda-date">20/10/2024</h3>
            <div className="agenda-name-description">
              <span className="agenda-name">Reunião com a Equipe de Campanha</span>
              <p className="agenda-description">
                Marco se reunirá com sua equipe para discutir estratégias de campanha, revisar metas e planejar atividades futuras. Será uma oportunidade para reforçar o trabalho conjunto e alinhar as mensagens que serão levadas aos eleitores.
              </p>
            </div>
          </div>
        </div>
        <div className="agenda-card">
          <div className="agenda-sub">
            <h3 className="agenda-date">25/10/2024</h3>
            <div className="agenda-name-description">
              <span className="agenda-name">Debate sobre Políticas Públicas</span>
              <p className="agenda-description">
                Um debate aberto onde Marco Madureira discutirá suas propostas de políticas públicas com outros candidatos e especialistas. O evento é uma chance para o público conhecer as diferentes visões e prioridades de cada candidato, além de fazer perguntas ao vivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;

