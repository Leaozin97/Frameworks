import CardProduto from './componentes/CardProduto/CardProduto'
import './App.css'
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';


function App() {

  return(
    <>
        <Header/>
        <Banner/>
        <div className='produtos_container'>
            <CardProduto/>
        </div>
        <Footer />
    </>
  )
}

export default App