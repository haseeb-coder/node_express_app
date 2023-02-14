const { models: {User }} = require('../models');

module.exports = {

    create: async (req, res) => {
        if (req.body.username && req.body.password) {
            const { username, password } = req.body

            await User.create ({
                username,
                password
            });

            res.cookie('username', username , { secure: true });
            res.render('profile', { username});
        }
        else {
            res.send("not edded to the database something wrong happened")
        }


    },

    login: async (req, res) => {
        if (req.body.username && req.body.password) {

            const { username, password } = req.body;
        
            let user = await User.findOne({
                where: { username, password }
            });
        
            if (user) {
                request.session.user = user;
                request.session.authorized = true;
                res.render('profile', { username });
            }
            else {
                res.render('login');
            }
        }        

    }
       
}