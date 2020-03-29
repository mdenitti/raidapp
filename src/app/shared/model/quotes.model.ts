export class Quote {
  constructor(
    public id: number,
    public quote_number: number,
    public organisations_id: number,
    public contacts_id: number,
    public products_id: number,
    public po_number: number,
    public price: number,
    public discount: number,
    public transport: number,
    public invoice: boolean,
    public send: boolean,
    public serviced: boolean,
    public payed: boolean
  ) { }
}