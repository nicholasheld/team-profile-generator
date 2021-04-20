const Employee = require("../lib/Employee");

// Test for emplyee class methods
describe("Employee", () => {
    describe("getName", () => {
        it("Should return employee's name", () => {
            let person = new Employee("David");

            expect(person.getName()).toEqual("David");
        })
    });

    describe("getId", () => {
        it("Should return employee's ID", () => {
            let person = new Employee("Steve", 200);

            expect(person.getId()).toEqual(200);
        })
    });

    describe("getEmail", () => {
        it("Should return employee's email address", () => {
            let person = new Employee("Nina", 300, "nina@gmail.com");

            expect(person.getEmail()).toEqual("nina@gmail.com");
        })
    });

    describe("getRole", () => {
        it("Should return the employee's role", () => {
            let person = new Employee();

            expect(person.getRole()).toEqual("Employee");
        })
    })
})