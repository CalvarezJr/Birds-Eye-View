import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import 'animate.css';

function App() {


  return (
    <div className='app bg-cloud-white min-h-screen'>
      <main>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>  
        </BrowserRouter>

      </main>
      <Footer />
    </div>
  )
}

export default App
