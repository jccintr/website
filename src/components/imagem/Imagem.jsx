import React from 'react';
import styles from './styles.module.css';
import girl from '../../assets/girl.png';

const Imagem = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.title}>Somos criadores de aplicativos</h3>
          <p className={styles.frase}>Transformamos suas idéias em aplicativos reais!</p>
        </div>
      
        <img  src={girl} alt="Imagem pessoa" />
    </div>
   
  )
}

export default Imagem