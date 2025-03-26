// class Animal{
// constructor(name){
//     this.name=name;
   
// }
//     firstname(){
//         console.log('The name of the student is '+this.name);
//     }
// }
// let bimal=new Animal('Bimal');//decalration of objects
// bimal.firstname();//firtsname() is only acessed by objects

//#static example
class Animal{
    constructor(name){
        this.name=name;
       
    }
        firstname(){
            console.log('The name of the student is '+this.name);
        }
        static display(){
            console.log("They buddy its a static function");
        }
    }
    let bimal=new Animal('Bimal');//decalration of objects
    bimal.firstname();//firtsname() is only acessed by objects

    // for calling the static fucntions we  use
    Animal.display();//its a function element of a class so it can be called like this