

// class Student {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string) {
//         this.name= name;
//         this.age = age;
//         this.address = address;
//     }

//     getSleep(sleepingHours: number) {
//         console.log(`${this.name} ${sleepingHours} ghonta ghumai`)
//     }
// }

// const studen1 = new Student("Mr. Fakibaaz", 22, "Bangladesh");

// studen1.getSleep(25);


// class Teacher {
//     name: string;
//     age: number;
//     address: string;
//     designation: string; // extra property

//     constructor(name: string, age: number, address: string, designation: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.designation = designation;
//     }

//     getSleep(sleepingHours: number) {
//         console.log(`${this.name} ${sleepingHours} ghonta ghumai`)
//     }

//     takeClass(classHours: number) {
//         console.log(`${this.name} sir ${classHours} class nei ! `)
//     }
// }

// const teacher1 = new Teacher("Mr. Smart", 28, "Dhaka, Bangladesh", "Senior Teacher");

// teacher1.takeClass(4);



class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(sleepingHours: number) {
        console.log(`${this.name} ${sleepingHours} ghonta ghumai`)
    }
}

class Student extends Parent {
    rollNo: number;

    constructor(name: string, age: number, address: string, rollNo: number) {
        super(name, age, address);

        this.rollNo = rollNo;
    }
}

const studen1 = new Student("Mr. Fakibaaz", 22, "Bangladesh", 2431);

studen1.getSleep(25);


class Teacher extends Parent {
    designation: string; // extra property

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClass(classHours: number) {
        console.log(`${this.name} sir ${classHours} class nei ! `)
    }
}

const teacher1 = new Teacher("Mr. Smart", 28, "Dhaka, Bangladesh", "Senior Teacher");

teacher1.takeClass(4);