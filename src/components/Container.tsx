import { useEffect } from "react";
import { fetchCharacters } from "../utils";

export const Container = () => {
  useEffect(() => {
    fetchCharacters();
  }, []);
  return <div>TEST</div>;
};
