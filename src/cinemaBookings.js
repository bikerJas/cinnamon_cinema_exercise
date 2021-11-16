const seats = require("./seatAllocation.js");

function tickets(bookings, seatsAvailable){

    if (!bookings) throw new Error ("There is no request for any tickets");
    if (bookings > 3) throw new Error ("Requested more tickets than the total limit allowed");
    
}

module.exports = tickets;