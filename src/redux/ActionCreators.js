export const addReview = (bookId, rating, author, review) => ({
  type: "ADD_REVIEW",
  payload: {
    bookId: bookId,
    rating: rating,
    author: author,
    review: review
  }
});
