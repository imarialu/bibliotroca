import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { BookCard } from "./components/BookCard";

function App() {
  return (
    <>
      <div className="flex gap-5 ml-5 mt-5">
        <BookCard status={"Novo"} title={"Pequena Coreografia do Adeus"} author={"Aline Bei"} nameUser={"Maria Luiza"}/>
      </div>
    </>
  )
}

export default App
