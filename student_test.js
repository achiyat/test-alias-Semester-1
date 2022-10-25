class Student {
  constructor(name, age, lastName) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
    this.grade = grade;
  }

  employment() {
    console.log(this.name, this.age);
  }
}

function PrintName() {
  console.log("achiya");
}

module.exports = { Student, PrintName };

function PrintAge() {
  console.log("30");
}

module.exports = { Student, PrintAge };

let std1 = new student("achiya", 21);
std1.employment();
console.log(std1);

import { person } from "./person_test.js";
export class Student extends person {
  constructor(name, lastName, age, grade) {
    super(name, lastName, age);
    this.grade = grade;
  }
}
