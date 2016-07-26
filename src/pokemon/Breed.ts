import {Type} from './Type.ts';

/**
 * Description of a Breed
 */
export class Breed {

    /**
     * The id in the pokedex
     */
    protected id:number;

    /**
     * The name of the pokemon
     */
    protected name:string;

    /**
     * What types the Breed has
     */
    protected types:Type[];

    /**
     * What pokemon does this evolve from
     */
    protected evolvesFrom:Breed;

    /**
     * How many candies does it take to get to this pokemon
     */
    protected candiesToEvolve:number;

    /**
     * The candy this breed is associated with
     */
    protected candy:Breed;

    /**
     * Create a breed of pokemon
     * @param {number} id
     * @param {string} name
     * @param {Type[]} types
     * @param {Breed} evolvesFrom
     * @param {number} candiesToEvolve
     * @param {Breed} candy
     */
    public constructor(id:number, name:string, types?:Type[], evolvesFrom?:Breed, candiesToEvolve?:number, candy?:Breed) {
        this.id = id;
        this.name = name;
        this.types = types || [];
        this.evolvesFrom = evolvesFrom || null;
        this.candiesToEvolve = candiesToEvolve || null;
        this.candy = candy || this;
    }

    /**
     * Get the name of the pokemon
     * @returns {string}
     */
    public getName():string {
        return this.name;
    }

    /**
     * Get a description.
     * It's a nice way to test construction
     * @returns {string}
     */
    public describe():string {
        let description = `${this.getName()} is pokemon #${this.id} in the pokedex`;
        if (this.types.length) {
            description += `\nType: ${this.describeTypes()}`;
        }
        if (this.evolvesFrom && this.candiesToEvolve > 0) {
            description += `\nEvolves from ${this.evolvesFrom.getName()}`;
            description += ` with ${this.candiesToEvolve} ${this.candy.getName()} candies`;
        }
        return description;
    }

    /**
     * Bit of a hack
     * Casts an array of Types to an array of strings, then join them.
     * @returns {string}
     */
    public describeTypes():string {
        return this.types.map((type) => {
            return String(type)
        }).join(', ');
    }
}
