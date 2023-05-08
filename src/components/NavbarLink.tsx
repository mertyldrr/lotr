import { useNavigate } from "react-router-dom";
import { useTableStore } from "../store/store";

export const NavbarLinks = () => {
  const navigate = useNavigate();
  const resetPagination = useTableStore((store) => store.reset);

  return (
    <ul className="flex flex-row p-4 space-x-4 lg:space-x-16">
      <li>
        <button
          className="block font-aniron p-0 text-lotrYellow lg:py-2"
          onClick={() => {
            resetPagination();
            navigate("/books");
          }}
        >
          <span className="text-xs md:text-base">Books</span>
        </button>
      </li>
      <li>
        <button
          className="block font-aniron p-0 text-lotrYellow lg:py-2"
          onClick={() => {
            resetPagination();
            navigate("/movies");
          }}
        >
          <span className="text-xs md:text-base">Movies</span>
        </button>
      </li>
      <li>
        <button
          className="block font-aniron p-0 text-lotrYellow lg:py-2"
          onClick={() => {
            resetPagination();
            navigate("/characters");
          }}
        >
          <span className="text-xs md:text-base">Characters</span>
        </button>
      </li>
      <li>
        <button
          className="block font-aniron p-0 text-lotrYellow lg:py-2"
          onClick={() => {
            resetPagination();
            navigate("/quotes");
          }}
        >
          <span className="text-xs md:text-base">Quotes</span>
        </button>
      </li>
    </ul>
  );
};
