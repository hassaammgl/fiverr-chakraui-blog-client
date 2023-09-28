import { Suspense, lazy } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style.css"
import Loader from './components/Loader/Loader';
const Home = lazy(() => import('./components/Home/Home'));



const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;