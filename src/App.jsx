import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import BookRegister from './pages/BookRegister/BookRegister';
import MyBooks from './pages/MyBooks/MyBooks';
import MyAccount from './pages/MyAccount/MyAccount';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Register/>}/>
          <Route path='/oi' element={<Home/>}/>
          <Route path='/cadastro-de-livros' element={<BookRegister/>}/>
          <Route path='/meus-livros' element={<MyBooks/>}/>
          <Route path='/minha-conta' element={<MyAccount/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
