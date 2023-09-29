import { Suspense, lazy } from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./style.css";
import Loader from "./components/Loader/Loader";
import Login from "./components/login signup/Login";
const Home = lazy(() => import("./components/Home/Home"));

const App = () => {

  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
