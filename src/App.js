import './App.css'
import Header from './components/Header'
// import { Greet,GreetOne } from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer'
import Products from './components/Products';

function App(){
  return(
    <div className='app'>
      {/* <img src={Shinchan} width={'500px'} alt=""/> */}
      <Header />
      {/* <Greet />
      <GreetOne /> */}
      <Hero />
      <Products />
      <Footer/>
    </div>
  )
}

export default App;
