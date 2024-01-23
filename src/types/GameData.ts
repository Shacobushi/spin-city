/* eslint-disable @typescript-eslint/no-explicit-any */
interface GameFeats {
  id: string;
  title: string;
  type: string;
}
interface Thms {
  id: string;
  title: string;
  type: string;
}

interface GameData {
  categories: string[];
  features: string[];
  themes: string[];
  icons: string[];
  backgrounds?: string[];
  id: string;
  server_game_id?: string | null;
  extearnal_game_id: string;
  front_game_id: string;
  name: string;
  title: string | null;
  ratio?: string;
  status: string;
  provider: string;
  show_as_provider: string;
  provider_title: string;
  game_options: any;
  blocked_countries: any;
  has_age_restriction: number;
  icon_2: string;
  background?: string;
  types: {
    realMode: number;
    funMode?: number;
  };
  game_skin_id: string;
  cats: {
    id: string;
    title: string;
    type: string;
  }[];
  feats: GameFeats[];
  thms: Thms[];
  active: string;
}

export default GameData;
