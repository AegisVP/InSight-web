export const selectUserData = store => store.params;
export const selectUserAuth = ({ name, email, token }) => ({ name, email, token });
export const selectUserToken = store => store.token;
export const selectUserIsLoading = store => store.isLoading;
export const selectUserError = store => store.error;
export const selectUserIsLoggedIn = store => store.user.auth.isLoggedIn;
