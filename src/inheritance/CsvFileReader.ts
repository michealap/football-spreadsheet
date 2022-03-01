import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] =[];
  
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

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
    .map(this.mapRow);
  }
}