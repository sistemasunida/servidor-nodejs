const express = require('express');
const app = express();
const indexRouter = require('./Routes/indexRouter');


//settings

app.set('port', process.env.PORT || 4000);

//middleware

//routes
app.use(indexRouter);

//start the server

app.listen(app.get('port'), () => {
    console.log('server listening on port: ' + app.get('port'));
});