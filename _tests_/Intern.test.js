  
const Intern = require("../lib/Intern");

// Test for intern class methods
describe("Intern", () => {
    describe("getName", () => {
        it("Should return intern's name", () => {
            let person = new Intern("Dingo");

            expect(person.getName()).toEqual("Dingo");
        })
    });

    describe("getId", () => {
        it("Should return intern's ID", () => {
            let person = new Intern("Dingo", 15);

            expect(person.getId()).toEqual(15);
        })
    });

    describe("getEmail", () => {
        it("Should return intern's email address", () => {
            let person = new Intern("Joe", 77, "joe@gmail.com");

            expect(person.getEmail()).toEqual("joe@gmail.com");
        })
    });

    describe("getSchool", () => {
        it("Should return the intern's school name", () => {
            let person = new Intern("Joe", 77, "joe@gmail.com", "University of MN");

            expect(person.getSchool()).toEqual("University of MN");
        })
    });

    describe("getRole", () => {
        it("Should return the team member's role", () => {
            let person = new Intern();

            expect(person.getRole()).toEqual("Intern");
        })
    })
})