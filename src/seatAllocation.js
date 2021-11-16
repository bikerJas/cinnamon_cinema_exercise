function seats(requested, available) {
  let message = "Seat ";
  for (let x = 0; x < requested; x++) {
    message += available[x] + " ";
  }
  message += "allocated";

  return message;
}

module.exports = seats;
