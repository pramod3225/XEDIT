import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES} from "./mock-heros";


@Injectable()
export class HeroService {

    getHeros():Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHerosSlowly():Promise<Hero[]>{
        return new Promise(resolve=>{
            setTimeout(() =>resolve(this.getHeros()) , 5000);
        });
    }

}