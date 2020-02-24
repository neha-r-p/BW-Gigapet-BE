const db = require("../database/db-config.js");

module.exports = {
  addEntry,
  findEntries,
  findEntryById,
  removeEntry,
  updateEntry
};

function addEntry(children_id, newEntry) {
  return db("entries as e")
    .join("children as k", "k.id", "e.children_id")
    .where("e.children_id", children_id)
    .insert(newEntry);
};

function findEntries(id) {
    return db('entries as e')
        .join("children as k", "k.id", "e.children_id")
        .where("children_id", id)
        .then(entries => {
            return entries
        })
};

function findEntryById(id) {
  return db('entries')
    .where({ id })
    .first();
};

function removeEntry(id) {
  return db('entries')
    .where({ id })
    .del();
};

function updateEntry(changes, id) {
  return db('entries')
    .where({ id })
    .update(changes);
};
