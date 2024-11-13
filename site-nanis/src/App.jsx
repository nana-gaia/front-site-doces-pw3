import './App.css'
import NavBar from './Components/Layout/NavBar/NavBar'
import Container from './Components/Layout/Container/Container'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateDoces from './Components/Pages/CreateDoce/CreateDoce'
import Cardapio from './Components/Pages/Cardapio/Cardapio'
import Home from './Components/Pages/Home/Home'
import Cadastro from './Components/Pages/Cadastro/Cadastro'


function App() {
  return (
    <>
     <BrowserRouter>
     <Container>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cardapio' element={<Cardapio/>}/>
          <Route path='/CreateDoces' element={<CreateDoces/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
      </Routes>
     </Container>
     </BrowserRouter>

    </>
  )
}

export default App
