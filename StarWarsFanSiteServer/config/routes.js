const app = require('./express.js');
const homePage = require('../routes/homePage.js');
const authHandler = require('../routes/auth.js');
const searchHandler = require('../routes/usersSearch.js');
const charactersHandler = require('../routes/characters.js');
const postsHandler = require('../routes/posts.js');
const adminAuthHandler = require('../routes/adminAuth.js');
const commentHandler = require('../routes/comments.js');


app.use('/api/', homePage);

app.use('/api/', authHandler);

app.use('/api/', searchHandler);

app.use('/api/', charactersHandler);

app.use('/api/', postsHandler);

app.use('/api/', adminAuthHandler);

app.use('/api/', commentHandler);







module.exports = app;