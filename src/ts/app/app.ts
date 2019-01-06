//import './../../styles/index'
import 'styles'
import { sayHelloTo } from './hello';

var module: any;
const h1 = document.createElement('h1');

h1.innerText = sayHelloTo('Javascript Developer');
document.body.appendChild(h1);

if (module.hot) {
	module.hot.accept();
	module.hot.dispose( () => h1.parentNode.removeChild(h1) );
}