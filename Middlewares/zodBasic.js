const zod=require('zod');

// //finding if the inputed data is an arry containing any numbers using zod

// function findingOut(arr){
//     const schema=zod.array(zod.number());
//     const response=schema.safeParse(arr);
//     console.log(response)
// }
// findingOut([1,'2',3])




//validating the email and password

function validateall(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response=schema.safeParse(obj);
    console.log({response})
}
validateall({
    email:'bimalcgalise1@gmail.com',
    password:'bimalk65456ochappal'
})