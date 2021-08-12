
import './App.css';
import Nav from './components/Nav';
import GlobalStyle from './components/GlobalStyle';
import MoreAboutUs from './components/MoreAboutUs';
import Aboutus from './pages/AboutUs';
import Sectional from './components/Sectional';

function App() {
  return (
    <div className="App">
      
      <GlobalStyle />
       <Nav />
       <Aboutus /> 
       <MoreAboutUs />
       <Sectional />
    </div>
  );
}

export default App;
