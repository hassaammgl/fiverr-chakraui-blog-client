import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style.css"
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>

    </Router>
  )
}

export default App