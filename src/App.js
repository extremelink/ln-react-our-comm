import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Fashionista from './components/Fashionista';
import Products from './components/Products';

function App(){
  return(
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path ='/fashionista' element={<Fashionista />} />
        <Route path='/products' element ={<Products />} />
        <Route path='/product/:productId' element ={<ProductDetail />} />
        <Route path ='/*' element ={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
