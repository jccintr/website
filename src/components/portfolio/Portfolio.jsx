import React from 'react'
import styles from './styles.module.css';
import gondomar from '../../assets/portfolio/gondomar.png';
import paladar from '../../assets/portfolio/lanchonete-paladar.png';
import jb from '../../assets/portfolio/distribuidora-jb.png';
import absentor from '../../assets/portfolio/absentor.png';
import tripsun from '../../assets/portfolio/tripsun.png';
import grupodragao from '../../assets/portfolio/grupo-dragao.png';
import zap from '../../assets/portfolio/zap.png';
import rodovias from '../../assets/portfolio/rodovias.png';
import biblia from '../../assets/portfolio/biblia.png';
import carnaval from '../../assets/portfolio/carnaval.png';
import jcash from '../../assets/portfolio/jcash.png';
import sysbrascol from '../../assets/portfolio/sysbrascol.png';
import radios from '../../assets/portfolio/radios.png';
import ipva from '../../assets/portfolio/ipva.png';
import maxvendas from '../../assets/portfolio/maxvendas.png';


const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className={styles.container}>
          <h2 className={styles.title}>Portfólio</h2>
          <p className={styles.frase}>Alguns dos aplicativos desenvolvidos por nós.</p>
          
          <div className={styles.itemsContainer}>
                <img title="Aplicativo Garagem Gondomar" className={styles.logo} src={gondomar} alt="Garagem Gondomar" />
                <img title="Aplicativo Força de Vendas Distribuidora JB" className={styles.logo} src={jb} alt="Distribuidora JB" />
                <img title="Delivery Lanchonete Paladar" className={styles.logo} src={paladar} alt="Lanchonete Paladar" />
                <img title="Aplicativo Web Absentor" className={styles.logo} src={absentor} alt="Absentor" />
                <img title="Aplicativo Movél, Web e Api TripSun" className={styles.logo} src={tripsun} alt="TripSun" />
                <img title="Website Imóveis Grupo Dragão" className={styles.logo} src={grupodragao} alt="Grupo Dragão" />
                <img title="Aplicativo Zap Fácil" className={styles.logo} src={zap} alt="Zap Fácil" />
                <img title="Aplicativo Bíblia Digital Offline" className={styles.logo} src={biblia} alt="Bíblia Digital" />
                <img title="Gerenciador Finaneiro JCash" className={styles.logo} src={jcash} alt="JCash" />
                <img title="SisCom - Gerenciador Comercial" className={styles.logo} src={sysbrascol} alt="SisCom" />
                <img title="Aplicativo Player de Rádios" className={styles.logo} src={radios} alt="JC Rádios" />
                <img title="Aplicativo Ipva MG" className={styles.logo} src={ipva} alt="Ipva MG" />
                <img title="Aplicativo Força de Vendas Max Vendas" className={styles.logo} src={maxvendas} alt="Max Vendas" />
                <img title="Aplicativo Rodovias SP" className={styles.logo} src={rodovias} alt="Rodovias SP" />
                <img title="Aplicativo Carnaval Rio 92" className={styles.logo} src={carnaval} alt="Carnaval Rio 92" />
          </div>
       </div>
        
    </section>
      
  )
}

export default Portfolio