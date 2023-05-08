import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Books } from "./components/Books";
import { Movies } from "./components/Movies";
import { Characters } from "./components/Characters";
import { Quotes } from "./components/Quotes";
import { RandomQuote } from "./components/RandomQuote";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <Navbar />

      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/books" element={<Books />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
