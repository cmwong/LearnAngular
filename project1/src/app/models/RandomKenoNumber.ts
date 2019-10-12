// https://javascript.info/task/shuffle
export class RandomKenoNumber {
  private num1: Array<number> = [];
  constructor() {
    this.initArray();
  }
  private initArray(): void {
    this.num1 = [];
    for (let i = 1; i <= 80; i++) {
      this.num1.push(i);
    }
    this._shuffle(this.num1);
  }
  private _shuffle(array: Array<number>): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  public shuffle(): void {
    this._shuffle(this.num1);
  }
  public getRandomNumber(howMany: number): Array<number> {
    if (this.num1.length >= howMany) {
      return this.num1.splice(0, howMany);
    } else {
      this.initArray();
      return this.getRandomNumber(howMany);
    }
  }
}
