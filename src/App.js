
import './App.css';
import Imagem from './components/imagem/Imagem';
import Navbar from './components/navbar/Navbar';
import Servicos from './components/servicos/Servicos';
import Tecnologias from './components/tecnologias/Tecnologias';

function App() {
  return (
  <>
      <Navbar/>
      <Imagem/>
      <Servicos/>
      <Tecnologias/>
   </>
  );
}

export default App;
