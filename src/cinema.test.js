const tickets = require("./cinemaBookings.js");

describe("tickets", () => {
    test("returns error if no tickets are requested", () => {
      expect(() => {
        //act
        tickets();
        //assert
      }).toThrow("There is no request for any tickets");
    });

    test("returns error if more than 3 tickets are requested", () => {
      expect(() => {
        //act and arrange
        tickets(4);
        //assert
      }).toThrow("Requested more tickets than the total limit allowed");
    })

  });