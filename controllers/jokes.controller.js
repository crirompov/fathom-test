const joke_types = require('../models/joke_types');
const jokes = require('../models/jokes');

const getAllJokes = async (req, res, next) => {
    let jokesDatabase = await jokes.findAll({where: {active: 1}},{ include: [{ model: joke_types, require: true, as: 'jokes_type'}], order: [['CREATED_AT', 'DESC']]});
    res.send(jokesDatabase);
}

module.exports = {
    getAllJokes
}