
import { sayHelloTo } from './hello';

var module: any;
const span = document.createElement('span');

span.innerText = sayHelloTo('Javascript Developer');
document.body.appendChild(span);

if (module.hot) {
	module.hot.accept();
	module.hot.dispose( () => span.parentNode.removeChild(span) );
}