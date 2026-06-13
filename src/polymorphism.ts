
// 2nd piller of object oriented programming >> polymorphism >> bohurupi


class Person {
    getSleep() {
        console.log(`I am a normal guy. I sleep for 8 hours in a day !`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I am a student and i am sleeping 7 hours !`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a next level developer. I sleep for 6 hours !`)
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1);


class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = height;
    }

    getArea() {
        return this.height * this.width;
    }
}

const getArea = (param: Shape) => {
    return param.getArea();
}

const shape1 = new Circle(10);
const shape2 = new Rectangle(10, 20);