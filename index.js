const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'/dashboard/build')));

app.get('/', (req, res) => {
   //res.send("Hello World");
    res.sendFile(path.join(__dirname,'/dashboard/build/index.html'));
});

const productRoutes = require('./routes/routes');

app.use('/api/v1', productRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});