import React,{Suspense,lazy} from 'react';
import{Routes,Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';


const Home=lazy (()=>import('./pages/Home'));
const Concurso=lazy (()=>import('./pages/Concurso'));
const Sobre=lazy (()=>import('./pages/Sobre'));

function App() {
  
  return (
    <>
      <Navbar/>
      <Suspense fallback={<div>Carregando</div>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/concurso' element={<Concurso/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
      </Suspense>
      
    </>
  );
}

export default App;
