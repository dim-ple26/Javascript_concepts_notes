// let obj = {
//     a:1,
//     b:"Dimple"
// }

// console.log(obj)

// let animal = {
//     eats:true
// };
// let rabbit = {
//     jumps:true
// };

//  rabbit.__proto__=animal; // sets rabbit.[[prototype]] = animal
//  // prototype is additional properties of javascript oops

class Animal {
    constructor(name) {
        this.name=name
        console.log("Object is created")

    }
    
    eats() {
        console.log("I am Eating")
    }
    jumps() {
        console.log("I am Jumping")
    }


}

class Lion extends Animal {
      constructor(name) {
        super(name)
        this.name=name
        console.log(" lion created")
      }
}
let a =new Animal("Bunny");
console.log(a)

let l= new Lion("Shera");
console.log(l)
