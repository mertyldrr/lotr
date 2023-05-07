export type Book = {
  id: string;
  name: string;
};

export type Movie = {
  _id: string;
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
};

export type Character = {
  _id: string;
  name: string;
  gender: string;
  birth: string;
  height: string;
  hair: string;
  spouse: string;
  race: string;
  realm: string;
  death: string;
  wikiUrl: string;
};

export type FilteredCharacter = Omit<Character, "hair" | "realm" | "height">;

export type Quote = {
  _id: string;
  dialog: string;
  character: string;
  movie: string;
};

export enum Tabs {
  BOOK = "book",
  MOVIE = "movie",
  CHARACTER = "character",
  QUOTE = "quote",
}
