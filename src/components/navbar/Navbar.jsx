import React, {useState} from 'react'
import styles from './styles.module.css';
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {
 const [showMenuMobile,setShowMenuMobile] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>Integra Apps</h3>
      <ul  className={showMenuMobile ? styles.navlinksmobile : styles.navlinks}>
        <li className={styles.links}>Serviços</li>
        <li className={styles.links}>Portfolio</li>
        <li className={styles.links}>Tecnologias</li>
        <li className={styles.links}>Contato</li>
      </ul>
      <button className={styles.mobilemenuicon} onClick={()=>setShowMenuMobile(!showMenuMobile)}>
        {showMenuMobile ? <FaTimes/>:<FaBars/>}
      </button>
    </nav>
  )
}

export default Navbar
