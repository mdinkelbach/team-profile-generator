const Manager = require("../lib/manager").Manager;

describe("Manager", () => {
    describe("getRole", () => {
      it('ask for a name', () => {    
          const result = new Manager().getRole();

          expect.assertions(0);
        });
      });
});