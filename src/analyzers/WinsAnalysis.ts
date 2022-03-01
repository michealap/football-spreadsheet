import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

// class that takes all of the match data, run analysis on it, then return a result
export class WinsAnalysis implements Analyzer {
  // needs to satisfy Analyzer interface
  constructor(public team: string){}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1]  === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}