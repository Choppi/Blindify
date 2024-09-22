import { Category } from "./category.model";

export class Game {
    name: string;
    players: number;
    maxPlayers: number;
    categories: Array<Category>;
    creationDate: Date;
    endDate: Date;
}