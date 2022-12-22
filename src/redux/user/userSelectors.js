export const selectUserData = store => store.user.params;
export const selectAuth = ({ name, email, token }) => ({ name, email, token });
export const selectToken = store => store.user.token;
export const selectIsLoadingUser = store => store.user.isLoading;
export const selectErrorUser = store => store.user.error;
