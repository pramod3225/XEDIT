import { Injectable } from "@angular/core";
import {  OrderItem} from './order';
//import { HEROES} from "./mock-heros";


@Injectable()
export class OrderService {

    getOrders():Promise<OrderItem[]> {
        return Promise.resolve([
            {itemCode: "12",  itemName: "TEA",  quantity: 1,   rate: 20, customisation: ""},
            {itemCode: "25",  itemName: "VEG",  quantity: 1,   rate: 40, customisation: ""}
            ]);
    }
    getEmptyOrder(): Promise<OrderItem> {
        return Promise.resolve({
            itemCode: "",
            itemName: "",
            quantity: 1,
            rate: null,
            customisation: ""
        });
    }
    // getHerosSlowly():Promise<OrderItem[]>{
    //     return new Promise(resolve=>{
    //         setTimeout(() =>resolve(this.getHeros()) , 5000);
    //     });
    // }

}