const db = require('../database/dbConfig.js');

module.exports = {
    getUserBy,
    addUser
};


function getUserBy(username){
    return db('users')
        .where({ username })
        .first();
}

async function addUser(user) {
    const [id] = await db('users').insert(user);

    return getUserById(id);
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}