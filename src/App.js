import {Route,Routes} from 'react-router-dom'
import KDIndex from "./Pages/KDIndex";
import HomePage from './Pages/HomePage';
import './style/globle.css'
import AboutPage from './Pages/AboutPage';
function App() {
  return (

          <Routes>
           <Route exact path="/" element={<KDIndex/>}/>
           <Route exact path="/home" element={<HomePage/>}/>
           <Route exact path="/about" element={<AboutPage/>}/>
          </Routes>
      );
}

export default App;
