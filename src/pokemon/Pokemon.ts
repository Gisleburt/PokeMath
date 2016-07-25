import {Type} from './Type.ts';

/**
 * Description of a Pokemon
 */
export class Pokemon {

    /**
     * The id in the pokedex
     */
    protected id:number;

    /**
     * The name of the pokemon
     */
    protected name:string;

    /**
     * What types the Pokemon has
     */
    protected types:Type[];

    /**
     * What pokemon does this evolve from
     */
    protected evolvesFrom:Pokemon;

    /**
     * How many candies does it take to get to this pokemon
     */
    protected candiesToEvolve:number;

    /**
     * The candy this pokemon uses
     */
    protected candy:Pokemon;

    /**
     * Create a pokemon
     * @param {number} id
     * @param {string} name
     * @param {Type[]} types
     * @param {Pokemon} evolvesFrom
     * @param {number} candiesToEvolve
     * @param {Pokemon} candy
     */
    public constructor(id:number, name:string, types:Type[], evolvesFrom:Pokemon, candiesToEvolve:number, candy:Pokemon) {
        this.id = id;
        this.name = name;
        this.types = types || [];
        this.evolvesFrom = evolvesFrom;
        this.candiesToEvolve = candiesToEvolve || 0;
        this.candy = candy;
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
