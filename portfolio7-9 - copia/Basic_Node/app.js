import fs from 'fs';
import path from 'path';
import superheroes, { randomSuperhero } from 'superheroes';
import supervillains, {randomSupervillain} from 'supervillains';
import sw from 'star-wars-quotes';

const hero = randomSuperhero();
const villain = randomSupervillain();
console.log(sw())



console.log(`Epic Battle: ${hero} vs. ${villain}`);


const filePath = path.join('data', 'input.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error leyendo el archivo:', err);
        return;
    }
    console.log('Secret message:', data);
});
