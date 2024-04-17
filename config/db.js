const mongoose = require('mongoose');

const db = async ()=> {
try{
    const connect = await mongoose.connect(process.env.DB_STRING);
    console.log('db connected');
}catch(e){
console.log('failed to cnnect', e);
}
};
module.exports = db;