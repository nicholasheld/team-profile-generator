  
const Employee = require("../lib/Employee");

// Test for emplyee class methods
describe("Employee", () => {
    describe("getName", () => {
        it("Should return employee's name", () => {
            let person = new Employee("Nicholas");

            expect(person.getName()).toEqual("Nicholas");
        })
    });

    describe("getId", () => {
        it("Should return employee's ID", () => {
            let person = new Employee("Nicholas", 21);

            expect(person.getId()).toEqual(21);
        })
    });

    describe("getEmail", () => {
        it("Should return employee's email address", () => {
            let person = new Employee("Jeff", 23, "jeff@gmail.com");

            expect(person.getEmail()).toEqual("jeff@gmail.com");
        })
    });

    describe("getRole", () => {
        it("Should return the employee's role", () => {
            let person = new Employee();

            expect(person.getRole()).toEqual("Employee");
        })
    })
})