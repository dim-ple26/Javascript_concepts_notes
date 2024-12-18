// CRUD DB
use("CRUD_db")

// CREATE
db.createCollection("courses")


//INSERT
// db.courses.insertOne({
//     name:"harry ",
//     price:"0",
//     assignments:"12",
//     projects:"45"
// })


// db.courses.insertMany([
//         {
//             name: "harry",
//             price: 0,
//             assignments: 12,
//             projects: 45
//         },
//         {
//             name: "emma",
//             price: 50,
//             assignments: 10,
//             projects: 30
//         },
//         {
//             name: "john",
//             price: 100,
//             assignments: 15,
//             projects: 40
//         },
//         {
//             name: "sophia",
//             price: 200,
//             assignments: 20,
//             projects: 50
//         },
//         {
//             name: "oliver",
//             price: 0,
//             assignments: 8,
//             projects: 25
//         }
// ])


// READ

// let a = db.courses.find({price:0})
// //console.log(a.count)
// // console.log(a.toArray())

// let b = db.courses.findOne({price:0})
// // console.log(b)
    

// UPDATE
db.courses.updateOne({price:"0"}, 
    {$set:{price: "100"}})

//db.courses.updateMany    

// DELETE
db.courses.deleteOne
db.courses.deleteMany({name: "harry"})

// do operators query
