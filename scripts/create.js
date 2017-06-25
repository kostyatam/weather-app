const options = parseArgs(process.argv);
const path = require('path');
const Structure = require('./structure');
const fs = require('mz/fs');

const APP_PATH = path.join(__dirname, '../app');
const COMPONENT_STRUCTURE_PATH = path.join(__dirname, './structures', 'component');
const COMPONENT_DESTINATION_PATH = path.join(APP_PATH, '/components');
const COMPONENT_INCLUDES_PATH = path.join(COMPONENT_DESTINATION_PATH, 'includes.json');

const CONTAINER_STRUCTURE_PATH = path.join(__dirname, './structures', 'container');
const CONTAINER_DESTINATION_PATH = path.join(APP_PATH, '/containers');
const CONTAINER_INCLUDES_PATH = path.join(CONTAINER_DESTINATION_PATH, 'includes.json');

const params = parseArgs(process.argv);

createEntry(params).catch(err => {
	console.error(`${params.type} ${params.name} didn't created \n`, err);
	return Promise.reject(err);
}).then(() => {
	console.log(`${params.type} ${params.name} successfully created at ${COMPONENT_DESTINATION_PATH}`);
});

function createEntry ({type, name}) {
	switch (type) {
		case 'component':
			return new Structure(COMPONENT_STRUCTURE_PATH)
			.create(`${COMPONENT_DESTINATION_PATH}/${name}`)
			.then(() => {
				const includes = Object.assign({[name]: true}, require(COMPONENT_INCLUDES_PATH));
				return fs.writeFile(COMPONENT_INCLUDES_PATH, JSON.stringify(includes));
			});
		case 'container':
			return new Structure(CONTAINER_STRUCTURE_PATH).create(`${CONTAINER_DESTINATION_PATH}/${name}`)
			.then(() => {
				const includes = Object.assign({[name]: true}, require(CONTAINER_INCLUDES_PATH));
				return fs.writeFile(CONTAINER_INCLUDES_PATH, JSON.stringify(includes));
			});
		default:
			return Promise.reject(new Error(`Unknown entries type: ${type}`));
	}
}

function parseArgs (argv) {
	const [type, name] = argv.slice(2);
	if (!name) {
		console.error(`Name of ${type} should be defined`);
		process.exit();
	}
	
	return {
		type,
		name: name.toUpperCase()[0] + name.slice(1).toLowerCase()
	}
}





