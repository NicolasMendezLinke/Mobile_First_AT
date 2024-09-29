import { useState, useEffect } from "react";
import styles from "./Conteudo.module.css";
import PropostasLista from "./PropostasLista";
import Propostas from "./PropostasCard";
import Biografia from "./Biografia";
import Footer from "./Footer";
import Agenda from "./Agenda";

const Conteudo = () => {
  const [showButton, setShowButton] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["main-content"]}>
      {" "}  
      <Biografia />
      <Propostas />
      <PropostasLista />
      <Agenda />
      <Footer />
    </div>
  );
};

export default Conteudo;
