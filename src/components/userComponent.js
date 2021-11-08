import BaseLogger from "../crossCuttingConcerns/Logging/Logger.js";
import User from "../models/user.js";
import  UserService from "../services/userService.js"

console.log("User Component Loaded!")
let logger1= new BaseLogger() 
let userService = new UserService()

let user1= new User(1,"Engin","Demirog","Ankara");
let user2= new User(2,"Engin2","Demirog2","Ankara2");

userService.add(user1);
userService.add(user2);

console.log(userService.list())
console.log(userService.getById(1));
userService.list();