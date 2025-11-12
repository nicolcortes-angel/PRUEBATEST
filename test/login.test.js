import { loginUser } from "../src/controllers/user.controller";
import supertest from "supertest";
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model";
import bcryptjs from "bcryptjs";


//2. desarrollar las pruebas

describe("Pruebas de login de usuario", () => {

    const testUser = {
        fullName: "Usuario de Prueba",
        email: "nicolmurciacortes@gmail.com",
        password: "Test1234"
    };

    beforeEach(async () => {
        await userModel.deleteMany({});
});

    afterAll(async () => {
        await mongoose.connection.close();
    });
    


} 
);  //conectar a la base de datos antes de las pruebas
  
