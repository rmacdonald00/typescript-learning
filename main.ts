
// //Your First TypeScript Program

//import { runInThisContext } from "vm";

// // function log(message){
// //     console.log(message);
// // }

// // var message = 'Hello World!';

// // log (message);

// //Declaring variables

// // var number = 1;
// // let count = 2;

// //haha uhhhhh scope of i ??? 
// /*
//  * a variable declared with 'var' is scoped to the nearest function
//  */
// // function doSomething(){
// //     for(var i = 0; i < 5; i++){
// //         console.log(i);
// //     }

// //     console.log('Finally: ' + i);
// // }
// // doSomething();

// //scope of i ??? 
// /*
//  * 'let' causes issues
//  */
// // function doSomething2(){
// //     for(let i = 0; i < 5; i++){
// //         console.log(i);
// //     }

// //     console.log('Finally: ' + i);
// // }
// //doSomething2();

// //Types

// //bad - typescript doesn't like this, even though its valid javascript
// // let count = 5;
// // count = 'a';
// //hovering over a variable tells you its type
// let a;
// a = 1;
// a = true;
// a = 'a';
// //^^^ scary
// let b: number;
// b = 1;
// // b = true;
// // b = 'b';

// //diff types
// let i: number;
// let j: boolean;
// let k: string;
// let m: any;
// let n: number[] = [1, 2, 3];
// let p: any[] = [1, true, 'a', false];

// //enums

// //could do but yucky
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// //or better:
// enum Color { Red, Green, Blue};
// let background = Color.Red
// //or best !! :
// enum Color1 { Red = 0, Green = 1, Blue = 2, Purple = 3};
// //js of this is big yucky, so we avoid it

// // where I am : https://www.youtube.com/watch?v=k5E2AVpwsko at 48:35

// //type assertions

// let message;
// message = 'abc';
// let endsWith = message.endsWith('c');
// //if we dont make it clear message's type at declaration, we lose intellisense
// let endswith2 = (<String>message).endsWith('c'); // <= more common
// let endswith3 = (message as String).endsWith('c');
// //the variable doesn't actually change type at runtime

// //arrow functions
// //normal
// let log = function(message){
//     console.log(message);
// }
// //typescript
// let doLog = (message) => {
//     console.log(message)
// }
// //or
// let doLog2 = (message) => console.log(message);
// //just like lambda expressions
// //or 
// let doLog3 = () => console.log(); // without parameters

// //custom types
// // let drawPoint = (x, y, a, b, c, d) => {
// //     //...
// // }
// //try to avoid so many parameters
// // let drawPoint = (point: { x: number, y: number}) => { //this has inline annotation, but a little verbose
// //     //...
// // }
// //lets make an interface
// // interface Point { //note the UpperCamelCasing
// //     x: number,
// //     y: number
// // }

// // let drawPoint = (point: Point) => { 
// //     //...
// // }

// // drawPoint({
// //     x: 1,
// //     y: 2
// // })

// //but this doesn't cause problems
// // drawPoint({
// //     name: 'Mosh'
// // })

// //okay but ^^^^^ violates cohesion
// //drawing a point should relate to the point object thing
// let getDistance =  (pointA: Point, pointB: Point) =>  {
//     //...
// }   //this is bad tooooo
// //lets make a class to group the stuff

// // interface Point { //note the UpperCamelCasing
// //     x: number,
// //     y: number
// //     draw: () => void; //but interfaces cant have implementation so it goes elsewhere
// // }

import {Point} from './point' // if there are multiple types, just separate with comma

let point = new Point(3, 4);
let point1 = new Point();
point.draw();
let x = point.x;
point.x = 10;
point.draw();
