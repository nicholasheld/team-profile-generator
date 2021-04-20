const Manager = require("../lib/Manager");

// Test for manager class methods
describe("Manager", () => {
    describe("getName", () => {
        it("Should return manager's name", () => {
            let person = new Manager("Thomas");

            expect(person.getName()).toEqual("Thomas");
        })
    });

    describe("getId", () => {
        it("Should return manager's ID", () => {
            let person = new Manager("Margaret", 500);

            expect(person.getId()).toEqual(500);
        })
    });

    describe("getEmail", () => {
        it("Should return manager's email address", () => {
            let person = new Manager("Bianca", 300, "bianca@gmail.com");

            expect(person.getEmail()).toEqual("bianca@gmail.com");
        })
    });

    describe("getOfficeNumber", () => {
        it("Should return manager's email address", () => {
            let person = new Manager("Bianca", 300, "bianca@gmail.com", 6513758673);

            expect(person.getOfficeNumber()).toEqual(6513758673);
        })
    });

    describe("getRole", () => {
        it("Should return the team member's role", () => {
            let person = new Manager();

            expect(person.getRole()).toEqual("Manager");
        })
    })
})