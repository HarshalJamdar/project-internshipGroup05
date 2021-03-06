
const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const app = express();
const route = require('./routes/route.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://HarshalJamdar:810Umakant@cluster0.wz2ii.mongodb.net/group05Database", {
    useNewUrlParser: true //only will read new cluster formate of mongoDB.
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)

//
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
}); //process.env.PORT- informing what is run time env.(that is version of nodejs here)