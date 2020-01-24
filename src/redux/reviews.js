import { REV } from "../shared/reviews";

export const Reviews = (state = REV, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      var review = action.payload;
      review.id = state.length;
      review.date = new Date().toISOString();
      return state.concat(review);

    default:
      return state;
  }
};
