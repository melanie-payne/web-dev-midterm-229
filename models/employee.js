let mongoose = require('mongoose');

//Create Model of Product
let employeeModel = mongoose.Schema(
    {
        "name" : String,
        "address" : String,
        "contact_num" : Number
    },
    {
        collection: "employee"
    }
);

module.exports = mongoose.model('Employee', employeeModel);