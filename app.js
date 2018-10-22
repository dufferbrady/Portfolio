const EXPRESS = require('express');
const PORT = process.env.PORT || 5000

const APP = EXPRESS();


APP.use(EXPRESS.static('views'))
APP.use(EXPRESS.static('public/stylesheets'))
// APP.get('/', (req, res) => {
//     res.render("index.html");
// })

APP.listen(PORT, () => console.log(`Listening on ${ PORT }`));