import React from 'react'
import styles from './styles.module.css';

import gondomar from '../../assets/logo-gondomar.png';
import remax from '../../assets/logo-remax.png';
import tripsun from '../../assets/logo-tripsun.png';




const Clientes = () => {
  return (
    <section id="clientes">
        <div className={styles.container}>
          <h2 className={styles.title}>Nossos Clientes</h2>
          <p className={styles.frase}>Alguns de nossos clientes no Brasil e no exterior.</p>
          <div className={styles.itemsContainer}>
                <img className={styles.logo} src={gondomar} alt="" />
                <img className={styles.logo} src={remax} alt="" />
                <img className={styles.logo} src={tripsun} alt="" />
             
                
          </div>
         
         
        </div>
        
    </section>
      
  )
}

export default Clientes