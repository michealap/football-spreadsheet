import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
// matchReader.matches - array of matchData tuples
summary.buildAndPrintReport(matchReader.matches);







