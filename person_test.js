class Person {
  constructor(name, age, lastName, grade) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
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
