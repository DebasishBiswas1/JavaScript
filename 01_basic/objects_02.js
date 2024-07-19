const course = {
    name: "JS tutorial",
    price: "999",
    CourseInstructor: "Debasish"
}

// de-structuring objects
// const {CourseInstructor} = course
// console.log(CourseInstructor);

const {CourseInstructor:Instructor} = course
console.log(Instructor);