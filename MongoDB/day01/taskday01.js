
use FacultySystemDB 

db.student.insertOne({
  fName: "Mrihan",
  lName: "Mohamed",
  Age: 26,
  Faculty: { Name: "FCI", Address: "Minia" },
  Grades: [
    { cname: "c#", Grade: 60, Pass: true },
    { cname: "JS", Grade: 100, Pass: true }
  ],
  isFired: false
});

db.student.insertMany([
  {
    fName: "mostafa",
    lName: "Khalid",
    Age: 22,
    Faculty: { Name: "Law", Address: "Ashmoon" },
    Grades: [
      { cname: "Algebra", Grade: 85, Pass: true },
      { cname: "History", Grade: 55, Pass: true }
    ],
    isFired: true
  },
  {
    fName: "Adam",
    lName: "zidan",
    Age: 21,
    Faculty: { Name: "FCI", Address: "Shebin Elkom" },
    Grades: [
      { cname: "History", Grade: 92, Pass: true },
      { cname: "Literature", Grade: 88, Pass: true }
    ],
    isFired: false
  },
  {
    fName: "Gamal",
    lName: "Ahmed",
    Age: 24,
    Faculty: { Name: "dentist", Address: "Cairo" },
    Grades: [
      { cname: "Economics", Grade: 68, Pass: true },
      { cname: "Marketing", Grade: 79, Pass: true }
    ],
    isFired: false
  }
])

db.student.find({})
db.student.find({ fName: "Ali" })
db.student.find({ $or: [{ fName: "Ahmed" }, { lName: "Ahmed" }] })
db.student.find({ fName: { $ne: "Ahmed" } })
db.student.find({ Age: { $lt: 21 } })
db.student.find({ isFired: true })
db.student.find({ Age: { $gte: 21 }, Faculty: { $exists: true } })
db.student.find({ fName: "Ali" }, { fName: 1, lName: 1, isFired: 1, _id: 0 })

// Updating 
db.student.updateOne({ fName: "Ali" }, { $set: { lName: "Omar" } })

db.student.replaceOne(
  { fName: "Ali" },
  {
    fName: "moaaz",
    lName: "kamal",
    Age: 22,
    Faculty: { Name: "Engineering", Address: "Example City" },
    Grades: [
      { CourseName: "Math", Grade: 85, Pass: true },
      { CourseName: "Physics", Grade: 75, Pass: true }
    ],
    isFired: false
  }
)

db.student.deleteMany({ IsFired: true })

db.student.drop()
db.dropDatabase()




use FacultySystemV2
db.createCollection("student")
db.createCollection("faculty")
db.createCollection("course")

db.student.insertMany([
  {
    FirstName: "hassan",
    LastName: "ali",
    IsFired: true,
    FacultyID: 1,
    Courses: [
      { CourseID: 22, Grade: "B" },
      { CourseID: 21, Grade: "A" }
    ]
  }
])

db.faculty.insertMany([
  { FacultyName: "Law", Address: "Ashmoon" }
])

db.course.insertMany([
  { CourseName: "DS&Algo", FinalMark: 55 }
])
