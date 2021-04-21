const Manager = require("../lib/Manager");

// Test for manager class methods
describe("Manager", () => {
    describe("getName", () => {
        it("Should return manager's name", () => {
            let person = new Manager("David");

            expect(person.getName()).toEqual("David");
        })
    });

    describe("getId", () => {
        it("Should return manager's ID", () => {
            let person = new Manager("David", 65);

            expect(person.getId()).toEqual(65);
        })
    });

    describe("getEmail", () => {
        it("Should return manager's email address", () => {
            let person = new Manager("David", 65, "david@gmail.com");

            expect(person.getEmail()).toEqual("david@gmail.com");
        })
    });

    describe("getOfficeNumber", () => {
        it("Should return manager's email address", () => {
            let person = new Manager("David", 65, "david@gmail.com", 5);

            expect(person.getOfficeNumber()).toEqual(5);
        })
    });

    describe("getRole", () => {
        it("Should return the team member's role", () => {
            let person = new Manager();

            expect(person.getRole()).toEqual("Manager");
        })
    })
})