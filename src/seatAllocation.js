function seats(requested, available) {
  let message = "";
  if (available.length < requested) {
    message = "Unable to allocate all seats in request";
  } else {
    message = "Seat ";
    for (let x = 0; x < requested; x++) {
      message += available[x] + " ";
    }
    message += "allocated";
  }
  return message;
}

module.exports = seats;
