import { Filter } from "./filter.enum";

export class Category {
    public name: string;
    public color: string;
    public selected: boolean;

	constructor($name: string, $color: string, $selected: boolean) {
		this.name = $name;
		this.color = $color;
		this.selected = $selected;
	}
}