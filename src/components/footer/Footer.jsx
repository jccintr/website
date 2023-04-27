import React from 'react'
import styles from './styles.module.css';
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>Integra Apps Desenvolvimento Ltda</p>
        <p className={styles.text}>Av. Cel. Francisco Braz, 372</p>
        <p className={styles.text}>Centro - Brasópolis - MG</p>
        <div className={styles.whatsLine}>
           <FaWhatsapp className={styles.icon} size={22} color="#fff" />   
           <p className={styles.text}>35-99912-2008</p>
        </div>
            
        
        
    </div>
  )
}

export default Footer