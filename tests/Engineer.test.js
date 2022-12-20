const Engineer = require("../lib/engineer").Engineer;

describe("Employee", () => {
    describe("getRole", () => {
      it('ask for a name', () => {    
          const result = new Engineer().getRole();

          expect.assertions(0);
        });
      });
});