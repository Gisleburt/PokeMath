import { Pokemon } from './Pokemon.ts';
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

export class Bulbasaur extends Pokemon {
    public constructor() {
        super(1, 'Bulbasaur', [grass, poison], null, 0, null);
        this.candy = this;
    }
}

export class Ivysaur extends Pokemon {
    public constructor() {
        super(1, 'Ivysaur', [grass, poison], new Bulbasaur(), 25, new Bulbasaur());
    }
}

export class Venusaur extends Pokemon {
    public constructor() {
        super(1, 'Venusaur', [grass, poison], new Ivysaur(), 100, new Bulbasaur());
    }
}
