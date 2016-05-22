" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    var textOut = "";
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      if(type == "cat"){
        var cat = new Cat(name);
        textOut += cat.getName()+" says "+cat.speak()+"</br>";
      }
      if(type == "dog"){
        var dog = new Dog(name);
        textOut += dog.getName()+" says "+dog.speak()+"</br>";
      }
      if(type == "bird"){
        var bird = new Bird(name);
        textOut += bird.getName()+" says "+bird.speak()+"</br>";
      }
      display.innerHTML = textOut;
    }
  };

function Pet(name){
    this.name = name;
};
Pet.prototype.speak = function(){
  return "I'm a pet";
};
Pet.prototype.getName = function(){
  return this.name;
};

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

function Cat(name){
  Pet.call(this,name);
};
Cat.prototype.speak = function(){
  return "Meow!";
};

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

function Cat(name){
  Pet.call(this,name);
};
Cat.prototype.speak = function(){
  return "Meow!";
};

Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;

function Dog(name){
  Pet.call(this,name);
};
Dog.prototype.speak = function(){
  return "Bark!";
};

Bird.prototype = Object.create(Pet.prototype);
Bird.prototype.constructor = Bird;

function Bird(name){
  Pet.call(this,name);
};
Bird.prototype.speak = function(){
  return "Chirp!";
};
  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
