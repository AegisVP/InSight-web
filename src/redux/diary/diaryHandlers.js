export const handleAddDiaryEntry = (state, action) => {
  state.inputDiary.push(action.payload);
};

export const handleDeleteDiaryEntry = (state, action) => {
  const idx = state.inputDiary.findIndex(input => input._id === action.payload._id);
  if (idx >= 0) state.inputDiary.splice(idx, 1);
};

export const handleGetDailyDiary = (state, action) => {
  state.inputDiary = action.payload;
};
