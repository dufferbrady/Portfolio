const EXPRESS = require('express');

const APP = EXPRESS();


APP.use(EXPRESS.static('views'))
APP.use(EXPRESS.static('public/stylesheets'))
// APP.get('/', (req, res) => {
//     res.render("index.html");
// })

APP.listen(3000, (req, res) => {
    console.log("Server now running on port 3000 :)");
})