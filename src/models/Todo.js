export class Todo {
	constructor(text) {
		this.id = Date.now();
		this.completed = false;
		this.text = text;
	}
}
