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
    });
  });

  describe("Allocation of seats in an empty theatre", () => {
    test("test returns seat numbers A1 and A2 when 2 tickets requested", () => {
    //arrange
    const seating = ["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5","C1","C2","C3","C4","C5"];
    const ticket = 2;
      //act and assert
      expect(tickets(ticket, seating)).toBe("Seat A1 A2 allocated");
    });
  });