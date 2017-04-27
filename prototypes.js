class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
}

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`);
};

const cat = new Cat("cat", "owner");
const kitty = new Cat("kitty", "forever free");

cat.cuteStatement();
kitty.cuteStatement();

Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}!`);
};

cat.cuteStatement();

Cat.prototype.meow = function() {
  console.log("meow");
};

kitty.meow = function() {
  console.log("no meow for you");
};

cat.meow();
kitty.meow();
