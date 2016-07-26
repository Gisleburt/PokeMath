import { Breed } from './Breed.ts';
import {
    normal,
    fire,
    water,
    electric,
    grass,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dragon,
    dark,
    steel,
    fairy
} from './TypeList.ts'

export const bulbasaur = new Breed(1, 'Bulbasaur', [grass, poison]);
export const ivysaur = new Breed(1, 'Ivysaur', [grass, poison], bulbasaur, 25, bulbasaur);
export const venusaur = new Breed(1, 'Venusaur', [grass, poison], ivysaur, 100, bulbasaur);
