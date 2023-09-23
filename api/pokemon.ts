import axios from 'axios'

export interface Region {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface Pokemon {
  name: string
  url: string
}

export const getRegions = (): Promise<Region[]> => {
  return axios
    .get('https://pokeapi.co/api/v2/region')
    .then((res) => res.data.results)
}

export const getLocations = (region: string): Promise<Location[]> => {
  return axios
    .get(`https://pokeapi.co/api/v2/region/${region}`)
    .then((res) => res.data.locations)
}

export const getPokemons = (): Promise<Pokemon[]> => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=1292`)
    .then((res) => res.data.results)
}
