const validation = (values) => {

    let errors ={};

    if (!values.fullname){
        errors.fullname = "Name is required.";
    }
    if (!values.email){
        errors.email="Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid.";
    }
    if(!values.password){
        errors.password="Password is required.";
    } else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)){
         errors.password="Password must: be more than eight characters, contain at least one capital letter, a numbers and one symbol(eg #$*&@) .";
      }

    return errors;

};

export default validation;