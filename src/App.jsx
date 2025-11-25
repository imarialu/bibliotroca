import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import BookRegister from './pages/BookRegister/BookRegister';
import MyBooks from './pages/MyBooks/MyBooks';
import MyAccount from './pages/MyAccount/MyAccount';
import BookDetails from './pages/BookDetails/BookDetails';
import EditBook from './pages/EditBook/EditBook';
import PrivateRoute from './layouts/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/cadastro' element={<Register/>}/> 

          <Route path='/' element={<PrivateRoute/>}>
            <Route index element={<Home/>}/> 
            <Route path='/cadastro-de-livros' element={<BookRegister/>}/> 
            <Route path='/meus-livros' element={<MyBooks/>}/> 
            <Route path='/minha-conta' element={<MyAccount/>}/> 
            <Route path='/detalhes/:uuid' element={<BookDetails/>}/> 
            <Route path='/editar-livro/:uuid' element={<EditBook/>}/> 
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
