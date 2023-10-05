import { Suspense, lazy } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Loader from "./components/Loader/Loader";
const Login = lazy(() => import("./components/login signup/Login"));
const Signup = lazy(() => import("./components/login signup/Signup"));
const Home = lazy(() => import("./components/Home/Home"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
