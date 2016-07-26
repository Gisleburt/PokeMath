import { Breed } from './Breed.ts'

export class Evolution {

    private _from:Breed;

    private _to:Breed;

    private _candyType:Breed;

    private _numberOfCandies:number;

    constructor(from:Breed, to:Breed, candyType:Breed, numberOfCandies:number) {
        this._from = from;
        this._to = to;
        this._candyType = candyType;
        this._numberOfCandies = numberOfCandies;
    }

    get from():Breed {
        return this._from;
    }

    get to():Breed {
        return this._to;
    }

    get numberOfCandies():number {
        return this._numberOfCandies;
    }

    get candyType():Breed {
        return this._candyType;
    }
}
