import { Shape } from "./Shape";

export class Circle extends Shape{

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX,theY);
    }

    
    public get radius() : number {
        return this._radius;
    }

    
    public set radius(v : number) {
        this._radius = v;
    }
    
    getInfo(): string {
        return super.getInfo() + `,radius=${this._radius}`;
    }
    
}