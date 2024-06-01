import Header from "./components/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/main";
import MovieDetails from "./components/Details";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
