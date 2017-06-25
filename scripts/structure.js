const fs = require('mz/fs');
const path = require('path');
const mustache = require('mustache');
const FILE = 'file';
const DIR = 'dir';

class Structure {
	constructor (PATH) {
		this.type;
		this.tree = this.constructor.getStructure(PATH);
	}

	create (PATH) {
		const {base: name} = path.parse(PATH);
		return this.tree.then(tree => {
			return this.constructor.structureToDir(tree, PATH, {name});
		});
	}

	static parseName (name, data) {
		return Object.keys(data)
		.reduce((name, prop) => name.replace('$' + prop, data[prop]), name);
	}

	static getStructure (PATH) {
		return fs.readdir(PATH).then( dir => {
			const reads = dir.map(item => {
				const FILE_PATH = path.join(PATH, item);
				const FILENAME = path.parse(FILE_PATH).base;
				return fs.readFile(FILE_PATH, 'utf8')
				.then(file => {
					return {
						type: FILE,
						name: FILENAME,
						file
					}
				})
				.catch(err => {
					const DIR_PATH = FILE_PATH;
					const DIRNAME = FILENAME;
					switch (err.code) {
						case 'EISDIR':
							return this.getStructure(DIR_PATH)
							.then(children => {
								return {
									type: DIR,
									name: DIRNAME,
									children
								}
							});
						default:
							return Promise.reject(err);
					}
				});
			})
			return Promise.all(reads);
		}).catch(err => {
			console.log(`can't read structure at ${PATH} \n`, err);
		})
	}

	static structureToDir (tree, PATH, data) {
		return fs.mkdir(PATH)
		.catch(err => {
			return Promise.reject(err);
		})
		.then(() => {
			const writes = tree.map(item => {
				const FILENAME = this.parseName(item.name, data);
				switch (item.type) {
					case FILE:
						const FILE_PATH = path.join(PATH, FILENAME);
						return fs.writeFile(FILE_PATH, mustache.render(item.file, data));
					case DIR:
						const DIR_PATH = path.join(PATH, FILENAME);
						return this.structureToDir(item.children, DIR_PATH, data);
					default:
						return Promise.reject();
				}
			});
			return Promise.all(writes);
		})
	}
};

module.exports = Structure;