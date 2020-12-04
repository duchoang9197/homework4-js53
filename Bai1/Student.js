export default class Student {
    studentCode;
    name;
    age;
    course;

    constructor(name, age, course) {
        this.studentCode = uuid.v4();
        this.name = name;
        this.age = age;
        this.course = course;
    };
};