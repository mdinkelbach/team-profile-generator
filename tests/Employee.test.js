const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
      it('ask for a name', () => {    
          const result = new Employee().getName();

          expect.assertions(0);
        });
      });
});