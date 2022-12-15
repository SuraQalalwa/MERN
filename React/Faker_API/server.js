const express = require("express");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
const { faker } = require('@faker-js/faker')

class User{
    constructor(_id,firstName,lastName,email,password,phoneNumber){
        this._id=_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    } 
}
class Company{
    constructor(_id,name,address){
        this._id=_id;
        this.name = name;
        this.address=address       
}
}
class Address {
    constructor(street,state,city,zipCode,country){
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
}
}
const createUser= () => {
    return new User(
        faker.datatype.uuid(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.internet.email(),
        faker.internet.password(),
        faker.phone.number(),

    );
};
const createAddress = () => {
    return new Address(
        faker.datatype.uuid(),
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.state(),
        faker.address.zipCode(),
        faker.address.country(),
    );

};
const createCompany= () => {
    return new Company(
        faker.datatype.uuid(),
        faker.company.companyName(),
        createAddress()

    );
};

const newUser = createUser();
console.log(newUser);
app.get("/api/users", (req, res) => {
    res.json( newUser );
});
const newCompany = createCompany();
console.log(newCompany);
app.get("/api/company", (req, res) => {
    res.json( newCompany );
});

// app.get("/api/users/:id", (req, res) => {
//         console.log(req.params.id);
//         res.json( users[req.params.id] );
//     });
    app.listen(port); 
