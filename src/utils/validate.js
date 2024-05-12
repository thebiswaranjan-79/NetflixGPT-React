export const checkValidData = (email, password) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    // Used RegEx for email Validation 
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    // Used RegEx for Password Validation 

    if(!isEmailValid){
        return "Email ID is not Valid";
    }
    if(!isPasswordValid){
        return "Password  is not Valid";
    }
    // both case are passed 
    return null;

};