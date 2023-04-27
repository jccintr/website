import React, {useState} from 'react'
import styles from './styles.module.css';
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {
 const [showMenuMobile,setShowMenuMobile] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}><span className={styles.logoSpan}>In</span>tegra Apps</h1>
      <ul  className={showMenuMobile ? styles.navlinksmobile : styles.navlinks}>
        <a href="#servicos"><li className={styles.links}>Serviços</li></a>
        <a href="#portfolio"><li className={styles.links}>Portfólio</li></a>
        <a href="#tecnologias"><li className={styles.links}>Tecnologias</li></a>
        <a href="#clientes"><li className={styles.links}>Clientes</li></a>
        <a href="#contato"><li className={styles.links}>Contato</li></a>
      </ul>
      <button className={styles.mobilemenuicon} onClick={()=>setShowMenuMobile(!showMenuMobile)}>
        {showMenuMobile ? <FaTimes/>:<FaBars/>}
      </button>
    </nav>
  )
}

export default Navbar
