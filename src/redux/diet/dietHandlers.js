export const handleGettingUserInfo = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.params = action.payload;
};

export const handleGettingDiet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.params.proposedDiet = action.payload;
};
