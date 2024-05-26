import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer />
      <nav>
        <h1>OTAKI</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create Orders</Link>
      </nav>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </div>
   
    </BrowserRouter>
  );
}

export default App;
