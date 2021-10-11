

const VERSION = "v0"
const BASE_API_PATH = "/api/fathom-jokes/"+VERSION;

const jokes = require('./routes/jokes.route');

module.exports = app => {
    app.use(BASE_API_PATH+'/jokes', jokes);
}