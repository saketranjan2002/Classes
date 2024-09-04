import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username : string, password : string, firstName : string, lastName : string) {
    const user = await prisma.user.create({
        data:{
            email : username,
            firstName : firstName,
            lastName : lastName,
            password : password
        },
    });    
}

interface UpdateParamsType {
    firstName : string;
    lastName : string;
} 

async function updateUser(username : string , {
    firstName,
    lastName
} : UpdateParamsType) {
    const User = await prisma.user.update({
        data : {
            firstName,
            lastName
        },
        where : {
            email : username
        }
    })
}

async function getUserDetails(username : string) {
    const user = await prisma.user.findUnique({
        where : {
            email : username
        },
        select : {
            email : true,
            firstName : true,
            lastName : true
        }
    })
}