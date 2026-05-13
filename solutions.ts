// Problem 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter((num) => num % 2 === 0);
};

// Problem 2:
const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
};

// Problem 3:

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
};

// Problem 4: 
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

// Problem 5:
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
    return { ...book, isRead: true };
};

// Problem 6:
class Person {
    constructor(public name: string, public age: number) { }
}

class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Problem 7:
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((num) => arr2.includes(num));
};