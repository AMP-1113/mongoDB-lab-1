// 1. List all people. (200)
db.people.find();

// 2. Count all people. (200)
db.people.find().count();

// 3. List all people in Arizona. (6)
db.people.find({state: 'Arizona'})

// 4. List all males in Arizona. (2)
db.people.find( { $and: [
    {state: "Arizona" },
    { gender: "Male" }
    ]})

// 5. List all people in Arizona plus New Mexico. (8)
db.people.find( { $or: [
    {state: "Arizona"},
    {state: "New Mexico"}
    ]})

// 6. List all people under age 40. (90)
db.people.find({age: {$lt: 40} })

// 7. List all females in Florida between the ages of 40 and 45 (inclusive). (4)
db.people.find( { $and: [
    {gender: "Female"},
    {state: "Florida"},
    {age: {$lte: 45} },
    {age: {$gt: 40} },
    ]})