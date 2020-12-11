const path = require('path');

const express = require('express');
const parser = require('body-parser');

const basicRoutes = require('./routes/basicRoutes');

const app = express()
app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(express.static(path.join(__dirname , 'public')));
app.use(parser.urlencoded({extended : false}));

app.use(basicRoutes);

app.use((req , res , next) => {
    res.status(404).render('404.ejs');
});

app.listen(3000);
