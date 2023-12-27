function checkAge(birthYear:number){
    const date :number = new Date().getFullYear();
    if((date-birthYear)>=18)
        return true
    else  
        return false
}
export default function registerUser(name:string,birthYear:number){
    if(checkAge(birthYear)===true)
        console.log("User registeration succesful!");
    else   
        console.log("User registeration failed!");
}

registerUser("Sam",2003);