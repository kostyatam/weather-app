import includes from './includes.json';
const components = {};

export default Object
	.keys(includes)
	.filter( name => includes[name])
	.reduce((components, name) => {
		components[name] = require(`./${name}/index.js`).default;
		return components;
	}, components);