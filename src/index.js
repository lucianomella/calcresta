const express = require("express");


const PORT = process.env.PORT || 3001;
let app = express();

app.use(express.json());

app.use( '/coverage',express.static('./coverage/lcov-report/'));

app.use('/resta', require('./routes/resta'));


app.listen(PORT);
console.log(`Express server listening on port ${PORT}`);

module.exports = app