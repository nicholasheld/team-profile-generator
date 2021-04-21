const Employee = require("../lib/Employee");

// Test for emplyee class methods
describe("Employee", () => {
    describe("getName", () => {
        it("Should return employee's name", () => {
            let person = new Employee("Nate");

            expect(person.getName()).toEqual("Nate");
        })
    });

    describe("getId", () => {
        it("Should return employee's ID", () => {
            let person = new Employee("Tess", 24);

            expect(person.getId()).toEqual(24);
        })
    });

    describe("getEmail", () => {
        it("Should return employee's email address", () => {
            let person = new Employee("Tess", 33, "Tess@gmail.com");

            expect(person.getEmail()).toEqual("Tess@gmail.com");
        })
    });

    describe("getRole", () => {
        it("Should return the employee's role", () => {
            let person = new Employee();

            expect(person.getRole()).toEqual("Employee");
        })
    })
})