export class OrderItem {
    itemCode: String;
    itemName: String;
    quantity: Number;
    rate: Number;
    customisation: String;
    constructor() {
        this.itemCode = "";
        this.itemName = "";
        this.quantity = 1;
        this.rate = null;
        this.customisation = "";
    }
}