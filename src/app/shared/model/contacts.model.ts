export class Contact {
  constructor(
    public id: number,
    public name: string,
    public telephone: string,
    public mail: string,
    public organisation: number,
    public last_contacted: Date
  ) { }
}