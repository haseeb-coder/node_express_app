const express = require('express');
const session = require('express-session');
const  app = express();
const path = require('path');
const db = require("./models");


const store = new session.MemoryStore();
const users = require("./routes/users");
const posts = require("./routes/posts");
const login = require("./routes/login");
const logout = require('./routes/logout');


/* Set method is used to store variables */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

(async () => {
    await db.sequelize.sync();
})();

app.use(express.json());
app.use(session({
    secret: 'thisismysecretdonttellanyone!',
    cookie: {sameSite: 'strict'},
    store: store
}));
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, ('public'))));
app.use("/users", users);
app.use("/posts", posts);
app.use("/login", login);
app.use('/logout', logout);




app.all('/my-route', (req,res) =>{

    res.send("<h1>Welcome to my-route page</h1>");

});

app.use((req, res, next) => {

    console.log(store);
    next();

});
app.listen(1234);