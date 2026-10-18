// const tinderUser = new Object() // singleton object

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Aayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aayush",
            lastname: "Khadka"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "a",
    6: "b"
}

// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "ayush@gmail.com"
    },
    {
        id: 2,
        email: "khadka@gmail.com"
    },
    {
        id: 3,
        email: "inaph@gmail.com"
    }
]

users[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Aayush"
}

// course.courseName

// Better way of syntax and mostly followed => destructuring syntax

const {courseInstructor: instructor } = course
console.log(instructor);

// const navbar = ({company}) => {} // This is the react syntax and wherever you see the braces you need to know that it is destructuring.
// navbar(company = "Aayush")

//Api

// {
//     "name": "Aayush",
//     "courseName": "JS",
//     "coursePrice": "Free"
// } // Proper JSON structure. The key is usually in string.

[ 
    {},
    {},
    {}
]   // Api can also came in arrary like objects.