import fs from 'fs';

export class CsvFileReader {
  data: string[][] =[];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
    .readFileSync(this.filename, { 
      encoding: 'utf8' 
    })
    // parse data into a more useful data structure
    // split to array of strings then map over each element 
    .split('\n')
    .map((row:string): string[] => {
      return row.split(',');
    })
    
    
  }
}