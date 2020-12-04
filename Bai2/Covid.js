 function Distance(a, b) {
    return Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2);
 };  

 class Person {
    name;
    age;
    phoneNumber;
    coordinates;

    constructor(name, age, phoneNumber, coordinates) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.coordinates = coordinates;
    };

    findF1(person) {
        const F1 = [];
        for (let x of person) {
            if (Distance(x.coordinates, this.coordinates) < 2) {
                F1.push(x);
            };
        };
    };

    findF2(person) {
        const F1 = [];
        const F2 = [];
        for (let x of person) {
            if (Distance(x.coordinates, this.coordinates) < 2) {
                F1.push(x);
            };
        };
        for (let y of F1) {
            if (Distance(y.coordinates, F1) < 2) {
                F2.push(y);
            };
        };
    };
};