var differentColors = ["blue", "green", "purple", "yellow"];

// var jokes = ["Do you"]

var myCharacter = {
  name: "Super Velcro",
  powerLevel: 0.5,
  specialPowers: ["hang", "climb", "eat", "sneeze"],
  origin: "Panama",
  image: "http://codeparkhouston.com/hs-fall-2015/lesson-09/assets/super-velcro.jpg",
  climb: function(character){
    myCharacter.status = "I'm climbing!";
    character.says = "Nooo!";

    setTimeout(function(){
      delete myCharacter.status;
      delete character.says;
    }, 2000);
    
    return myCharacter.status;
  },
  hang: function(character){
    character.powerLevel = character.powerLevel - 1;
    myCharacter.powerLevel = myCharacter.powerLevel - 0.1;

    return "Other character now has power level of " + character.powerLevel;
  },
  eat: function(){
    myCharacter.powerLevel = myCharacter.powerLevel + 1;
    myCharacter.says = "Yum!";

    setTimeout(function(){
      delete myCharacter.says;
    }, 2000);

    return myCharacter.says;
  }
};


var myOtherCharacter = {
  name: "Platifish",
  powerLevel: 15,
  specialPowers: ["sleeping", "eating", "crawling", "fire-breathing"],
  origin: "Born from an egg, used fire to break out of shell",
  breathFire: function(character){
    myOtherCharacter.status = "Breathing fire!";
    myOtherCharacter.color = "red";

    character.color = "red";
    setTimeout(function(){
      character.color = "orange";
    }, 500);
    setTimeout(function(){
      character.color = "yellow";
    }, 1000);
    setTimeout(myOtherCharacter.stopPower, 2000);
    setTimeout(function(){
      delete character.color;
      character.powerLevel = character.powerLevel - 0.1;

    }, 2000);
    return myOtherCharacter.status;
  },
  stopPower: function(){
    delete myOtherCharacter.status;
    delete myOtherCharacter.says;
    delete myOtherCharacter.color;
    
    return "Power stopped";
  }
};


var makeRandomColor = function(){
  var randomIndex = Math.random() * differentColors.length;
  
  return differentColors[Math.floor(randomIndex)];
};

var makeCharacterRandom = function(character){
  character.color = makeRandomColor();
  return character.color;
};


show(myCharacter);
show(myOtherCharacter);


// myCharacter.color = "blue";

// setTimeout( function() {
//   delete myCharacter.color;
// }, 2000);

myCharacter.sayCatchPhrase = function(){
  myCharacter.says = "Hi I climb!";
  
  setTimeout(function(){
     delete myCharacter.says;
  }, 1000);
  
};




function makeRandomNumber(){
  var randomNumber = Math.floor(Math.random() * 6);
  return randomNumber;
}
