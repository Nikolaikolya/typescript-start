import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Inteface служат для описания объекта (какие сво-ва будут находиться в нем)
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then(response => {
	const { id, title, completed } = response.data as Todo;

	logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(id, title, completed );
}
