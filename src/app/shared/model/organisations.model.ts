export class Organisation {
  constructor(
    public id: number,
    public organisation: string,
    public street: string,
    public number: number,
    public postalcode: number,
    public city: string,
    public btwnr: string,
    public last_assignment: Date
  ) { }
}