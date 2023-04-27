
import './App.css';
import Clientes from './components/clientes/Clientes';
import Imagem from './components/imagem/Imagem';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Servicos from './components/servicos/Servicos';
import Tecnologias from './components/tecnologias/Tecnologias';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

function App() {
  return (
  <>
      <Navbar/>
      <Imagem/>
      <Servicos/>
      <Portfolio/>
      <Tecnologias/>
      <Clientes/>
      <Contato/>
      <Footer />
   </>
  );
}

export default App;
