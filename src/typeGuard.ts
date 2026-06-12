

// type guard

// in typeof

type AlphaNumeric = string | number;

const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
    if(typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } 
    else {
        return num1.toString() + num2.toString();
    }
};

// console.log(add(2,2))
// console.log(add(2,"2"))
// console.log(add("2",2))


// in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "Admin"
};

const getUserInfo = (user: NormalUser | AdminUser) => {
    if("role" in user) {
        console.log(`${user.name} and his role is ${user.role}`);
    } else {
        console.log(`${user.name} is our guest user !`);
    }
}

getUserInfo({name: "Md Shihab Sumon", role: "Admin"})