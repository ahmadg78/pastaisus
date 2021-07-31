
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import MoreAboutUs from './components/MoreAboutUs';
import Aboutus from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
       <Aboutus /> 
       <MoreAboutUs />
    </div>
  );
}

export default App;
