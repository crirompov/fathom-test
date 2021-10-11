
const Joke_types = require('./joke_types')
const Jokes = require('./joke_types')

Jokes.hasOne(Joke_types, { foreignKey: 'joke_types' })