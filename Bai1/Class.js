import Student from "./Student.js";

export default class Class {
    classCode;
    nameSubject;
    teacher;
    students;

    constructor (nameSubject, teacher) {
        this.classCode = uuid.v4();
        this.nameSubject = nameSubject;
        this.teacher = teacher;
        this.students = [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        };
    };

    deleteStudent(studentCode) {
        for (let x of this.students) {
            if (this.students[x].studentCode === studentCode) {
               this.students.splice(x, 1); 
            };
        };
    };

    updateStudent(studentCode, data) {
        for (let x of this.students) {
            if (this.students[x].studentCode === studentCode) {
                x.update(data);
                break;
            };
        };
    };

    showStudent() {
        return this.students;
    }

    findStudentById(studentCode) {
        return this.students.filter(x => x.studentCode === studentCode);
    };

    findStudentByName(name) {
        return this.students.filter(x.name === name);
    };
};
