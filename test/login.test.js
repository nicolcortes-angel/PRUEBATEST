import { loginUser } from "../src/controllers/user.controller";
import supertest from "supertest";
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model";
import bcrypt from "bcryptjs";
import app from "../app";


//2. desarrollar las pruebas

describe("Pruebas de login de usuario", () => {

    const testUser = {
        fullName: "Usuario de Prueba",
        email: "nicolmurciacortes@gmail.com",
        password: "Test1234"
    }

    beforeEach(async () => {
        await userModel.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });
   
    
    it("deberia inicar sesion correctamente con credenciales validas", async ()=> {
   
    const codedPassword = await bcrypt.hash(testUser.password, 10);
    await userModel.create({...testUser, password:codedPassword});
    
    const response = await supertest(app).post('/iniciarSesion').send({
           
        emailLogin: "nicolmurciacortes@gmail.com",
        passwordLogin: "Test1234"

    });

  
      expect(response.statusCode).toBe(200);
   


    });



     it("No deberia inicar sesion correctamente con credenciales validas, correo invalido", async ()=> {
   
    const codedPassword = await bcrypt.hash(testUser.password, 10);
    await userModel.create({...testUser, password:codedPassword});
    
    const response = await supertest(app).post('/iniciarSesion').send({
           
        emailLogin: "carolmurciacortes@gmail.com",
        passwordLogin: "Test1234"

    });

  
      expect(response.statusCode).toBe(404);
   


    });


    it("No deberia inicar sesion correctamente con credenciales validas, contraseña invalida", async ()=> {
   
    const codedPassword = await bcrypt.hash(testUser.password, 10);
    await userModel.create({...testUser, password:codedPassword});
    
    const response = await supertest(app).post('/iniciarSesion').send({
           
        emailLogin: "nicolmurciacortes@gmail.com",
        passwordLogin: "Test134"

    });

  
      expect(response.statusCode).toBe(401);
   


    });



});  

//conectar a la base de datos antes de las pruebas
  
