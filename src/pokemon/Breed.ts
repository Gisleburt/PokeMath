import {Type} from './Type.ts';
import {Evolution} from './Evolution.ts';

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
     * Which pokemon does this evolve from
     */
    protected evolvesFrom:Evolution[];

    /**
     * Which pokemon does this evolve to
     */
    protected evolvesTo:Evolution[];

    /**
     * Create a breed of pokemon
     * @param {number} id
     * @param {string} name
     * @param {Type[]} types
     */
    public constructor(id:number, name:string, types?:Type[]) {
        this.id = id;
        this.name = name;
        this.types = types || [];
        this.evolvesFrom = [];
        this.evolvesTo = [];
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
        if (this.evolvesFrom.length > 0) {
            description += '\nEvolves from:';
            for (let i = 0; i < this.evolvesFrom.length; i++) {
                /** @type Evolution */
                let evolution = this.evolvesFrom[i];
                description += `\n${evolution.from.getName()} with ${evolution.numberOfCandies}`
                             + ` ${evolution.candyType.getName()} candies`;

            }
        }
        if (this.evolvesTo.length > 0) {
            description += '\nEvolves in to:';
            for (let i = 0; i < this.evolvesTo.length; i++) {
                /** @type Evolution */
                let evolution = this.evolvesTo[i];
                description += `\n${evolution.from.getName()} with ${evolution.numberOfCandies}`
                             + ` ${evolution.candyType.getName()} candies`;

            }
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

    public setEvolvesFrom(evolvesFrom:Evolution[]) {
        this.evolvesFrom = evolvesFrom;
    }

    public setEvolvesTo(evolvesTo:Evolution[]) {
        this.evolvesTo = evolvesTo;
    }

}
