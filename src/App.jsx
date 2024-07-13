import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/componets/Shared/Navbar";
import Footer from "./assets/componets/Shared/Footer";
import Movie from "./assets/componets/Pages/Movie";
import Show from "./assets/componets/Pages/Show";
import Contact from "./assets/componets/Pages/Contact";
import SearchResults from "./assets/componets/Pages/SearchResults";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
