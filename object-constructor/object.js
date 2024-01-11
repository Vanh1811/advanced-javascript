//Prototypal inheritance.
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }

  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'

Object.getPrototypeOf(player1) === Player.prototype;
Object.getPrototypeOf(player2) === Player.prototype;

Player.prototype.sayHello = function(){
    console.log("Hello, I'm a player!");
}

player1.sayHello();
player2.sayHello();

//Don't do
player1.__prototype__ === Player.prototype;
player2.__prototype__ === Player.prototype;

// player1.[[Prototype]]

player1.valueOf();
player1.hasOwnProperty('valueOf');
Object.prototype.hasOwnProperty('valueOf');