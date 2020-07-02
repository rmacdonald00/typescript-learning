export class Point { //note the UpperCamelCasing
    // private x: number;
    // private y: number;

    constructor(private _x?: number, private _y?: number){ // makes it optional to not pass in initial values and now it will generate the x and y fields
    }
    draw() {
        //...
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDistance(another: Point) {
        //...
    }

    get x(){
        return this._x;
    }

    get y(){
        return this.y;
    }

    set x(value: number){
        this._x = value;
    }

    set y(value: number){
        this._y = value;
    }
}