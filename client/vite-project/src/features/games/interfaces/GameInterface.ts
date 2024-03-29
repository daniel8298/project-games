export type Platform =
  | "PC"
  | "PS5"
  | "PS4"
  | "XBOX SERIES"
  | "XBOX ONE"
  | "NINTENDO SWITCH";

export interface GameInterface {
  _id: string;
  name: string;
  genre: string;
  platforms: Platform;
  description: string;
  contactNumber: string;
  dateGame: string;
  imageUrl: string;
  imageAlt: string;
  address: {
    areaCountry: string;
    city: string;
    street: string;
  };
  userId: string;
  userName: string;
}

export default GameInterface;
