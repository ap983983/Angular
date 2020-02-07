import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(thex: number,they: number, private _width: number, private _length: number) {
        super(thex,they);    
    }

    
    public set width(v : number) {
        this._width = v;
    }

    
    public get width() : number {
        return this._width;
    }
    
    
    public set length(v : number) {
        this._length = v;
    }

    
    public get length() : number {
        return this._length;
    }

    getInfo(): string {
        return super.getInfo() + `width=${this._width}, length=${this._length}`;
    }

}