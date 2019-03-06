function Letter(ltr) {
    this.ltr = ltr;
    this.isGuessed = false;
    this.getLetter = function () {
        if (this.isGuessed) {
            return this.ltr
        } else {
            return "_";
        }
    };
    this.characterCheck = function (arg) {
        if (arg === this.ltr) {
            this.isGuessed = true;
        }
    }
}
var userInput = process.argv[2];
module.exports = Letter;