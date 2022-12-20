const Intern = require("../lib/intern").Intern;

describe("Intern", () => {
    describe("getRole", () => {
      it('ask for a name', () => {    
          const result = new Intern().getRole();

          expect.assertions(0);
        });
      });
});