import React from 'react'
import styles from './styles.module.css';
import php from '../../assets/php-logo.png';
import laravel from '../../assets/laravel-logo.png';
import node from '../../assets/nodejs-logo.png';
import react from '../../assets/react-logo.png';
import reactnative from '../../assets/react-native-logo.png';
import adonis from '../../assets/adonis-logo.png';




const Tecnologias = () => {
  return (
    <section id="tecnologias">
        <div className={styles.container}>
          <h2 className={styles.title}>Tecnologias Utilizadas</h2>
          <p className={styles.frase}>Utilizamos as melhores ferramentas para desenvolvimento disponíveis no mercado atualmente.</p>
          <div className={styles.itemsContainer}>
                <img className={styles.logo} src={react} alt="" />
                <img className={styles.logo} src={node} alt="" />
                <img className={styles.logo} src={reactnative} alt="" />
                <img className={styles.logo} src={laravel} alt="" />
                <img className={styles.logo} src={php} alt="" />
                <img className={styles.logo} src={adonis} alt="" />
                
          </div>
         
         
        </div>
        
    </section>
      
  )
}

export default Tecnologias