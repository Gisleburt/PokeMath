import { Breed } from './Breed.ts';
import { Evolution } from './Evolution.ts';
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

//
// Bulbasaur
//
export const bulbasaur = new Breed(1, 'Bulbasaur', [grass, poison]);
export const ivysaur   = new Breed(2, 'Ivysaur', [grass, poison]);
export const venusaur  = new Breed(3, 'Venusaur', [grass, poison]);

const bulbasaurToIvysaur = new Evolution(bulbasaur, ivysaur, bulbasaur, 25);
const ivysaurToBulbasaur = new Evolution(ivysaur, venusaur, bulbasaur, 100);

bulbasaur.setEvolvesTo([bulbasaurToIvysaur]);
ivysaur.setEvolvesFrom([bulbasaurToIvysaur]);
ivysaur.setEvolvesTo([ivysaurToBulbasaur]);
venusaur.setEvolvesFrom([ivysaurToBulbasaur]);

//
// Charmander
//
export const charmander = new Breed(4, 'Charmander', [fire]);
export const charmeleon = new Breed(5, 'Charmeleon', [fire]);
export const charizard  = new Breed(6, 'Charizard', [fire, flying]);

const charmanderToCharmeleon = new Evolution(charmander, charmeleon, charmander, 25);
const charizardToCharizard   = new Evolution(charmeleon, charizard, charmander, 100);

charmander.setEvolvesTo([charmanderToCharmeleon]);
charmeleon.setEvolvesFrom([charmanderToCharmeleon]);
charmeleon.setEvolvesTo([charizardToCharizard]);
charizard.setEvolvesFrom([charizardToCharizard]);
