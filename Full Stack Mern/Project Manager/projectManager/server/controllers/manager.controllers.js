const {Manager} = require('../models/manager.models');
module.exports.index= (request, response)=>{
    response.json({
        message: "Hello Tanas"
    });
}

module.exports.creatManager= (request, response)=>{
    const {title, price, description} = request.body;
    Manager.create({
        title,
        price,
        description
    })
    .then(manager=>response.json(manager))
    .catch(error=>response.json(error))
}