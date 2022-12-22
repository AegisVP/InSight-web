export const selectUserAuth = store => store.user.auth;
export const selectUserToken = store => store.user.auth.token;
export const selectIsUserGoogle = store => store.user.auth.isOAuth2;
export const selectIsUserNew = store => store.user.auth.isNew;
export const selectIsLoadingUser = store => store.user.auth.isLoading;
export const selectErrorUser = store => store.user.auth.error;
