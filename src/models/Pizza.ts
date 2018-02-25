import {Ingredients} from './Ingredients';

export class Pizza {
	constructor (
		public id: number = null,
		public name: string = "",
		public desc: string ="",
		public picture: string = "",
		public price: number = null,
		public ingredients: Ingredients[] = new Array<Ingredients>()){
	}
}
