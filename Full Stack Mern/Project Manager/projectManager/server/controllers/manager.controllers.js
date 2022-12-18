const {Manager} = require('../models/manager.models');
module.exports.index= (request, response)=>{
    response.json({
        message: "Hello"
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
}; 

module.exports.AllProductManager= (request, response)=>{
    Manager.find({})
    .then(products => response.json(products))
    .catch(error=>response.json(error))
};

module.exports.getOneProduct=(request, response)=>{
    Manager.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(error=>response.json(error))
};
