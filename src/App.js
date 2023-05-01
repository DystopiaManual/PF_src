import './reset.css';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

// FRAME
import Header from './frame/header';
import Footer from './frame/footer';
import ScrollTop from './frame/ScrollToTop';

// COMPONENTS
import Main from './component/Main';
import Intro from './component/Intro';
import Platina from './component/Platina';
import Studio from './component/Studio';
import Audi from './component/Audi';
import Sillajen from './component/Sillajen'

function App() {
  return (
    <div className='wrap'>
      <HashRouter>
      <ScrollTop/>
      <Header/>        
        <Routes>
          <Route path = '/' exact = {true} element={<Main/>} />
          <Route path = '/Platina' element={<Platina/>} />
          <Route path = '/Studio' element={<Studio/>} />
          <Route path = '/Audi' element={<Audi/>} />
          <Route path = '/Sillajen' element={<Sillajen/>} />
        </Routes>
      <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
