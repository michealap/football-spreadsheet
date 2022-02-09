import fs from 'fs';

const matches = fs.readFileSync('football.csv', { 
  encoding: 'utf8' 
})
// parse data into a more useful data structure
// split to array of strings then map over each element 
.split('\n')
.map((row:string): string[] => {
  return row.split(',');
})

let manUnitedWins = 0;
for (let match of matches) {
  if (match[1]  === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

// report
console.log(`Man United won ${manUnitedWins} games`);
