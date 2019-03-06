var Letter = require("./letter");

function Word(wordToGuess) {
    this.wordToGuess = wordToGuess;
    this.newLetterArray = [];
    this.wordString = function(){
        if(Letter.getLetter){
            this.newLetterArray.push(Letter.ltr)
        }
    }
    this.characterArg = function(letter){
        Letter.characterCheck(letter);
    }
}

module.exports = Word;