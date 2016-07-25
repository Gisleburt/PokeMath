/**
 * A value class for a type of pokemon.
 * @see types.ts for implementation
 */
export class Type {

    protected type:string;

    public constructor(type:string) {
        this.type = type;
    }

    public toString():string {
        return this.type;
    }
}
