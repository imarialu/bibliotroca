import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import BookRegister from './pages/BookRegister/BookRegister';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastro-de-livro' element={<BookRegister/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
