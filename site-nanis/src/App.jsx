import './App.css'
import NavBar from './Components/Layout/NavBar/NavBar'
import Container from './Components/Layout/Container/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateDoces from './Components/Pages/CreateDoce/CreateDoce'
import Cardapio from './Components/Pages/Cardapio/Cardapio'
import Home from './Components/Pages/Home/Home'
import Cadastro from './Components/Pages/Cadastro/Cadastro'
import Details from './Components/Pages/Details/Details'
import Delete from './Components/Pages/Details/Delete'
import Update from './Components/Pages/Details/Update'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/createdoces" element={<CreateDoces />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/delete/:id" element={<Delete/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
