const db = require('../database/db-config.js');

module.exports = {
	addChildren,
	findChildren,
	findChildById,
	remove
};

function addChildren(users_id, newChild) {
	return db('children as k')
		.join('users as u', 'u.id', 'k.users_id')
		.where('k.users_id', users_id)
		.insert(newChild)
};

function findChildren(id) {
	return db('children as k')
	.join("users as u", "u.id", "k.users_id")
	.where("users_id", id)
	.select('k.id', 'k.name', 'k.age', 'k.weight', 'k.users_id')
	.then(children => {
		return children
	})
};

function findChildById(id) {
	return db('children')
		.where({ id })
		.first();
};

function remove(id) {
	return db('children')
		.where({ id })
		.del();
};