"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAge(birthYear) {
    var date = new Date().getFullYear();
    if ((date - birthYear) >= 18)
        return true;
    else
        return false;
}
function registerUser(name, birthYear) {
    if (checkAge(birthYear) === true)
        console.log("User registeration succesful!");
    else
        console.log("User registeration failed!");
}
exports.default = registerUser;
registerUser("Sam", 2003);
