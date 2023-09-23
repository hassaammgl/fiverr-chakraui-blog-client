import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style.css"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<h1>Home Page</h1>} />
      </Routes>

    </Router>
  )
}

export default App