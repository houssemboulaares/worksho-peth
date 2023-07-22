const Router= require("express").Router()
const userController= require('../Controllers/UserController')


Router.get("/get",userController.get)
Router.post('/add',userController.add)
Router.post("/update",userController.update)
Router.post("/delete",userController.delete)
Router.post("/register",userController.register)

module.exports=Router