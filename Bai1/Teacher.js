export default class Teacher {
    teacherCode;
    name;
    age;
    level;

    constructor (name, age, level) {
        this.teacherCode = uuid.v4();
        this.name = name;
        this.age = age;
        this.level = level;
    };
};