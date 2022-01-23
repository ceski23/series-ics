import axios from 'axios';

interface Author {
  id: number;
  credit_id: number;
  name: string;
  gender: number;
}

interface Genre {
  id: number;
  name: string;
}

interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

interface SeasonInfo {
  air_date: string;
  episodes_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Season {
  _id: string;
  air_date: string;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  episodes: Episode[];
}

interface Series {
  adult: boolean;
  backdrop_path: string;
  created_by: Author[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  origina_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  seasons: SeasonInfo[];
}

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: 'en'
  }
});

export const getSeries = async (id: number) => {
  const data = await client.get<Series>(`tv/${id}`).then(res => res.data);
  return data;
}

export const getSeason = async (seriesId: number, seasonNumber: number) => {
  const data = await client.get<Season>(`tv/${seriesId}/season/${seasonNumber}`).then(res => res.data);
  return data;
}