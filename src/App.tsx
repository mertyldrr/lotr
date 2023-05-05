import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Books } from "./components/Books";
import { Movies } from "./components/Movies";
import { Characters } from "./components/Characters";
import { Quotes } from "./components/Quotes";

function App() {
  return (
    <div className="h-screen bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
