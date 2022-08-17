export function checkPhno(number){
    let regx = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
    return regx.test(number) ;
    
}



export function checkPincode(number){
    let regx = /^[1-9][0-9]{5}$/
    return regx.test(number);
}

export function checkVhcNo(number){
    let regx = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/
    return regx.test(number) ;
}