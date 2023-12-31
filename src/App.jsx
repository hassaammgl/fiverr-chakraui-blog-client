import { Suspense, lazy } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Loader from "./components/Loader/Loader";
const Login = lazy(() =>
  import("./components/login signup security questions/Login")
);
const Signup = lazy(() =>
  import("./components/login signup security questions/Signup")
);
const Home = lazy(() => import("./components/Home/Home"));
const BlogPage = lazy(() => import("./components/ReadBlog/BlogPage"));
const AuthorBlogs = lazy(() => import("./components/Author/AuthorBlogs"));
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/read-blog/:id" element={<BlogPage />} />
          <Route exact path="/author/:author_id" element={<AuthorBlogs />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        className={"toast-container"}
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </Router>
  );
};

export default App;
