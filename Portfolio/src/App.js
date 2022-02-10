import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Home from './components/Home';
import Tecnologies from "./components/Tecnologies"
import Proyects from "./components/Proyects"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tecnologies" element={<Tecnologies/>}/>
        <Route path="/contact" element={<Home/>}/>
        <Route path="/proyects" element={<Proyects/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>  
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
