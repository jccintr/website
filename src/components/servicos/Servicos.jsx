import React from 'react'
import styles from './styles.module.css';
import { MdPhoneAndroid } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";



const Servicos = () => {
  return (
    <section id="servicos">
        <div className={styles.container}>
          <h2 className={styles.title}>Serviços</h2>
          <p className={styles.frase}>Estamos prontos para lhe atender desde o projeto, até a publicação de seus aplicativos, nas lojas ou na internet.</p>
          <div className={styles.serviceContainer}>
              <article className={styles.serviceCard}>
                <MdPhoneAndroid className={styles.serviceIcon} />
                <h5 className={styles.serviceTitle}>Desenvolvimento Móvel</h5> 
                <p className={styles.serviceDescription}>Criamos o seu aplicativo para Android ou para Iphone e o publicamos nas lojas de aplicativos.</p> 
              </article>

              <article className={styles.serviceCard}>
                <BsBrowserChrome className={styles.serviceIcon} />
                <h5 className={styles.serviceTitle}>Desenvolvimento Web</h5> 
                <p className={styles.serviceDescription}>Desenvolvemos o seu website, landing page, loja virtual ou o seu aplicativo web.</p> 
              </article>

              
          </div>
         
         
        </div>
        
    </section>
      
  )
}

export default Servicos