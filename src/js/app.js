
// 1 - maneira de importa arquivo
	const { sayHelloTo } = require('./hello.js');

// 2 - maniera de importar arquivo
	//import { sayHelloTo } from './hello.js';

const span = document.createElement('span');
span.innerText = sayHelloTo('JS Developer');
document.body.appendChild(span);