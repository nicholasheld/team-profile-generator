  
const Intern = require("../lib/Intern");

// Test for intern class methods
describe("Intern", () => {
    describe("getName", () => {
        it("Should return intern's name", () => {
            let person = new Intern("Thomas");

            expect(person.getName()).toEqual("Thomas");
        })
    });

    describe("getId", () => {
        it("Should return intern's ID", () => {
            let person = new Intern("Fabio", 150);

            expect(person.getId()).toEqual(150);
        })
    });

    describe("getEmail", () => {
        it("Should return intern's email address", () => {
            let person = new Intern("Celso", 800, "pai@gmail.com");

            expect(person.getEmail()).toEqual("pai@gmail.com");
        })
    });

    describe("getSchool", () => {
        it("Should return the intern's school name", () => {
            let person = new Intern("Celso", 800, "pai@gmail.com", "University of Awesome");

            expect(person.getSchool()).toEqual("University of Awesome");
        })
    });

    describe("getRole", () => {
        it("Should return the team member's role", () => {
            let person = new Intern();

            expect(person.getRole()).toEqual("Intern");
        })
    })
})