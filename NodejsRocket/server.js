const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
global.config = require('./modules/config')
const apiRouter = require('./modules/routes/api/index')
const webRouter = require ('./modules/routes/web')
const path = require('path');
console.log(path.resolve('./modules/controllers'));


//Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/nodetest');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name : {type : String , required : true}
})

const userModel = mongoose.model('User', UserSchema);
async function createSampleUser() {
    try {
        const user = new userModel({
            name: "Parnia sahebsara"
        });
        await user.save();
        console.log('User saved successfully');
    } catch (err) {
        console.error('Error saving user:', err);
    }
}

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json())

app.use('/api' , apiRouter)
app.use('/' , webRouter);


app.listen(config.port , () => {
    console.log(`Server running at Port ${config.port}`)
})
