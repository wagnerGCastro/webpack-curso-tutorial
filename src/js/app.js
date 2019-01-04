
debugger;

// 1 - maneira de importa arquivo
	const { sayHelloTo } = require('./hello.js');

// 2 - maniera de importar arquivo
	//import { sayHelloTo } from './hello.js';

const span = document.createElement('span');
span.innerText = sayHelloTo('Javascript Developer');
document.body.appendChild(span);

if (module.hot) {
	module.hot.accept();
	module.hot.dispose( () => span.parentNode.removeChild(span) );
}