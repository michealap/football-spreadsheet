import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import {HtmlReport } from './reportTarget/HtmlReport';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches - array of matchData tuples

const summary = new Summary(
  // instance of analysis and console report
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HtmlReport()
)

summary.buildAndPrintReport(matchReader.matches);







