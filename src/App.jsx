import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import BookRegister from './pages/BookRegister/BookRegister';
import MyBooks from './pages/MyBooks/MyBooks';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Register/>}/>
          <Route path='/inicio' element={<Home/>}/>
          <Route path='/cadastro-de-livros' element={<BookRegister/>}/>
          <Route path='/' element={<MyBooks/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
