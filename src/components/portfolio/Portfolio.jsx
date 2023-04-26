import React from 'react'
import styles from './styles.module.css';
import gondomar from '../../assets/portfolio/gondomar.png';
import paladar from '../../assets/portfolio/lanchonete-paladar.png';
import jb from '../../assets/portfolio/distribuidora-jb.png';
import absentor from '../../assets/portfolio/absentor.png';
import tripsun from '../../assets/portfolio/tripsun.png';



const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className={styles.container}>
          <h2 className={styles.title}>Portfólio</h2>
          <p className={styles.frase}>Alguns dos aplicativos desenvolvidos por nós.</p>
          
          <div className={styles.itemsContainer}>
                <img className={styles.logo} src={gondomar} alt="" />
                <img className={styles.logo} src={jb} alt="" />
                <img className={styles.logo} src={paladar} alt="" />
                <img className={styles.logo} src={absentor} alt="" />
                <img className={styles.logo} src={tripsun} alt="" />
             
                
          </div>

              
        
         
        </div>
        
    </section>
      
  )
}

export default Portfolio