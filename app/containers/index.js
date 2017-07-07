import includes from './includes.json';
const containers = {};

export default Object
	.keys(includes)
	.filter( name => includes[name])
	.reduce((containers, name) => {
		containers[name] = require(`./${name}/index.js`).default;
		return containers;
	}, containers);