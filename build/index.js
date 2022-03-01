"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
// const reader = new MatchReader('football.csv');
// reader.read();
// console.log(reader.data[0][0]);
// use enums when aware of a small set of possible values
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// report
console.log(`Man United won ${manUnitedWins} games`);
