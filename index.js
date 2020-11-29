const Chance = require('chance');
const say = require('say');
const prompt = require('prompt-sync')();

const chance = new Chance();

const letters = ['J', 'T', 'M', 'O', 'L', 'P', 'B', 'Z'];

const ready = prompt('Ready? Enter, "y" ').toLocaleLowerCase();

if (ready === 'y') {
    setInterval(() => {
        const letter = chance.pickone(letters);

        console.log(letter);
        say.speak(letter);
    }, 3000);
} else {
    process.exit();
}
