const BookingService = {
  getBookedSeats: (movieId) => {
    const data = localStorage.getItem(`bookedSeats_${movieId}`);
    return data ? JSON.parse(data) : [];
  },

  bookSeats: (movieId, seats, userData) => {
    const existingSeats = BookingService.getBookedSeats(movieId);
    const updatedSeats = [...new Set([...existingSeats, ...seats])];
    localStorage.setItem(`bookedSeats_${movieId}`, JSON.stringify(updatedSeats));

    const bookingInfo = {
      seats,
      userData,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(`booking_${movieId}_${Date.now()}`, JSON.stringify(bookingInfo));
    return Promise.resolve(); 
  }
};

export default BookingService;
