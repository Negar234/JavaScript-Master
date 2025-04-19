const students = [
    {
        "id": 101,
        "name": "Alice Johnson",
        "age": 20,
        "grade": "A",
        "subjects": [
            { "name": "Math", "score": 90, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 85, "teacher": "Ms. Davis" },
            { "name": "History", "score": 88, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 170, "absent": 10 },
    },
    {
        "id": 102, "name": "Bob Williams", "age": 19, "grade": "B",
        "subjects": [
            { "name": "Math", "score": 78, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 82, "teacher": "Ms. Davis" },
            { "name": "History", "score": 80, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 165, "absent": 15 },
    },
    {
        "id": 103, "name": "Charlie Brown", "age": 21, "grade": "A",
        "subjects": [
            { "name": "Math", "score": 92, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 88, "teacher": "Ms. Davis" },
            { "name": "History", "score": 90, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 175, "absent": 5 },
    },
    {
        "id": 104, "name": "David Clark", "age": 22, "grade": "B",
        "subjects": [
            { "name": "Math", "score": 85, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 79, "teacher": "Ms. Davis" },
            { "name": "History", "score": 83, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 168, "absent": 12 },
    },
    {
        "id": 105, "name": "Ella Davis", "age": 20, "grade": "A",
        "subjects": [
            { "name": "Math", "score": 10, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 91, "teacher": "Ms. Davis" },
            { "name": "History", "score": 89, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 177, "absent": 3 },
    },
    {
        "id": 106, "name": "Frank Evans", "age": 23, "grade": "C",
        "subjects": [
            { "name": "Math", "score": 65, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 72, "teacher": "Ms. Davis" },
            { "name": "History", "score": 70, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 150, "absent": 30 },
    },
    {
        "id": 107, "name": "Grace Foster", "age": 19, "grade": "B",
        "subjects": [
            { "name": "Math", "score": 80, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 85, "teacher": "Ms. Davis" },
            { "name": "History", "score": 78, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 172, "absent": 8 },
    },
    {
        "id": 108, "name": "Henry Green", "age": 21, "grade": "B",
        "subjects": [
            { "name": "Math", "score": 100, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 79, "teacher": "Ms. Davis" },
            { "name": "History", "score": 81, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 169, "absent": 11 },
    },
    {
        "id": 109, "name": "Isla Harris", "age": 20, "grade": "A",
        "subjects": [
            { "name": "Math", "score": 100, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 92, "teacher": "Ms. Davis" },
            { "name": "History", "score": 90, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 176, "absent": 4 },
    },
    {
        "id": 110, "name": "Jack Hill", "age": 22, "grade": "C",
        "subjects": [
            { "name": "Math", "score": 70, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 74, "teacher": "Ms. Davis" },
            { "name": "History", "score": 72, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 158, "absent": 22 },
    },
    {
        "id": 111, "name": "Kate Irving", "age": 21, "grade": "A",
        "subjects": [
            { "name": "Math", "score": 96, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 93, "teacher": "Ms. Davis" },
            { "name": "History", "score": 95, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 178, "absent": 2 },
    },
    {
        "id": 112, "name": "Liam Jackson", "age": 19, "grade": "B",
        "subjects": [
            { "name": "Math", "score": 83, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 80, "teacher": "Ms. Davis" },
            { "name": "History", "score": 84, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 171, "absent": 9 },
    },
    {
        "id": 113, "name": "Mia King", "age": 20, "grade": "A",
        "subjects": [
            { "name": "Math", "score": 91, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 89, "teacher": "Ms. Davis" },
            { "name": "History", "score": 90, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 174, "absent": 6 },
    },
    {
        "id": 114, "name": "Noah Lewis", "age": 22, "grade": "B",
        "subjects": [
            { "name": "Math", "score": 79, "teacher": "Mr. Smith" },
            { "name": "Science", "score": 82, "teacher": "Ms. Davis" },
            { "name": "History", "score": 81, "teacher": "Mr. Brown" },
        ],
        "attendance": { "total_days": 180, "present": 168, "absent": 12 },
    },
]


//Questions:

//1. How many students are there in total?

// console.log(students.length)


// 2. How many students passed (all subjects have a score of at least 40)?
// let studentsPassed = 0

// for(let student of students){
//     let passed = true
//     for (let subjects of student.subjects){
//         if(subjects.score < 40){
//             passed = false
//             break
//         }
//     }
//     if(passed){
//         studentsPassed++
//     }
// }


// 3. Find the student with the highest total score.
// let topStudent = students[0]
// let highestScore = 0

// for(let student of students){
//     let totalScore = 0
//     for (let subjects of student.subjects){
//         totalScore += subjects.score
//     }

//     if(totalScore > highestScore){
//         highestScore = totalScore;
//         topStudent = student
//     }
// }

// console.log(`${topStudent.name} has topped the class with hightest marks of ${highestScore}`);

// How many students scored an 'A' grade?

// let aGradeStudents = 0
// for( let student of students){
//     if(student.grade === "A"){
//         aGradeStudents++
//     }
// }

// console.log(`Total students with A greade : ${aGradeStudents}`);


// 5. What is the average Math score of all students?
// let totalScore = 0
// for(let student of students){
//     for(let subject of student.subjects){
//         if(subject.name === "Math"){
//             totalScore += subject.score
//         }
//     }

// }
// const average = totalScore/students.length
// console.log(`the average number of students is: ${average}`);

// 6. Find students who were absent for more than 10 days.

// for (let student of students) {
//     if (student.attendance.absent > 10) {
//         console.log(`students who were absent : ${student.name}`);
//     }
// }

// 7. Which student has the lowest Science score?

// let lowest_score = Infinity
// let lowest_name =""

// for(let student of students){
//     for(let subject of student.subjects){
//         if(subject.name === "Science"){
//             if(subject.score < lowest_score){
//                 lowest_score = subject.score
//                 lowest_name = student.name
//             }
//         }  
//     }
// }
// console.log(`student has the lowest Science score is : ${lowest_name}`);


// 8. Count how many students have at least one subject score below 50.
// let score_status = 0

// for(let student of students){
//     for(let subject of student.subjects){
//         if(subject.score < 50){
//             score_status++

//         }
//     }
// }
// console.log(`${score_status} students have at least one subject score below 50`);

// 9. Find the student with the highest attendance percentage.

// let topAttendance = 0
// let topStudent = ""

// for (let student of students){
//     let attendancePercentange = (student.attendance.present / student.attendance.total_days) * 100

//     if(attendancePercentange > topAttendance){
//         topAttendance = attendancePercentange
//         topStudent = student.name
//     }
// }

// console.log(`${topStudent} has the highest attendance : ${topAttendance.toFixed(2)}%`);


// 10. List all students who have a perfect score (100) in any subject.

for (let student of students){
    let hasPerfectScore = false

    for(let subject of student.subjects){
        if(subject.score === 100){
            hasPerfectScore = true
            break;
        }
    }
    if(hasPerfectScore){
        console.log(`Perfect scorer: ${student.name}`);
        
    }
}