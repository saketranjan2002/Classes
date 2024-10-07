import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username : string, password : string, firstName : string,
    lastName : string) {
    const response = await prisma.user.create({
        data : {
            username,
            password,
            firstName,
            lastName
        }
    })
}

async function getTodos(userId : number) {
    const response = await prisma.todo.findMany({
        where : {
            userId: userId
        },
        select : {
            id : true,
            title : true,
            user : true         // we can use this since we have defined the relation in schema.prisma
        }
    })
    console.log(response);
}


getTodos(1);