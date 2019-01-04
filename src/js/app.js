
// 1 - maneira de importa arquivo
	const { sayHelloTo } = require('./hello.js');

// 2 - maniera de importar arquivo
	//import { sayHelloTo } from './hello.js';

const span = docuemnt.createElement('span');
span.innerText = sayHelloTo('Javascript Developer');
docuemnt.body.appendChild(span);