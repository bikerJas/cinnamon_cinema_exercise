const tickets = require("./cinemaBookings.js");

describe("tickets", () => {
    test("returns error if no tickets are requested", () => {
      expect(() => {
        tickets();
      }).toThrow("There is no request for any tickets");
    });

  });