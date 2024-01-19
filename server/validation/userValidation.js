const isEmpty= require('./isEmpty');
const validator = require('validator')
module.exports = function validateUser(data){
    let errors ={}
    
    data.email = isEmpty(data.email) ? data.email :""
    data.name = isEmpty(data.name) ? data.name :""
    data.password = isEmpty(data.password) ? data.password :""
    if(validator.isEmpty(data.email)){
        errors.email ="required Email"
    }
    if(validator.isEmpty(data.name)){
        errors.name ="required name"
    }
    if(validator.isEmpty(data.password)){
        errors.password ="required password"
    }
    if (validator.isEmail(data.email)){
        errors.email="Format email required"
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}
