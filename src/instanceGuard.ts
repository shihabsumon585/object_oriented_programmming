// oop : instance of type guard/ type narrowing

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getSleep(sleepingHour: number ) {
        console.log(`${this.name} is sleeping in ${sleepingHour} hour !`)
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(studygHour: number ) {
        console.log(`${this.name} is study in ${studygHour} hour !`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    takeClasses(classHour: number) {
        console.log(`${this.name} doinik ${classHour} class nei !`)
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student;
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(10);
    } else if (isTeacher(user)) {
        user.takeClasses(3.5)
    } else {
        user.getSleep(15)
    }
}

const student1 = new Student("Md Shihab Sumon");
const teacher1 = new Teacher("Mrs. Teachari");
const person1 = new Person("Dola Sarker");

getUserInfo(student1)