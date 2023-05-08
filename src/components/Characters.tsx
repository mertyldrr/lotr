import { useEffect } from "react";
import {
  CharacterHeaderOrder,
  CharacterHeaders,
  CharactersInPage,
} from "../constants";
import { useCharacterStore, useTableStore } from "../store/store";
import { Table } from "./Table";

export const Characters = () => {
  const fetchCharacters = useCharacterStore((store) => store.fetchCharacters);
  const characters = useCharacterStore((store) => store.characters);
  const updateTotalEntries = useTableStore((store) => store.updateTotalEntries);
  const currentPage = useTableStore((store) => store.currentPage);

  useEffect(() => {
    if (!characters) {
      const loadCharacters = async () => {
        // const characters = await fetchCharacters(3000);
        // updateCharacters(characters);
        fetchCharacters();
      };

      loadCharacters();
      // updateTotalEntries(characters.length);
    } else {
      updateTotalEntries(characters.length);
    }
  }, [characters, updateTotalEntries, fetchCharacters]);

  return (
    <div className="w-full flex justify-center items-center p-4 lg:w-9/12">
      {characters && (
        <Table
          data={characters.slice(
            (currentPage - 1) * CharactersInPage,
            currentPage * CharactersInPage
          )}
          headers={CharacterHeaders}
          headerOrder={CharacterHeaderOrder}
          rowsPerPage={CharactersInPage}
        />
      )}
    </div>
  );
};
