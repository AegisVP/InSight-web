export const selectUserAuth = store => {
  const { name, email, token } = store.user;
  return { name, email, token };
};

export const selectUserToken = store => {
  console.log(store.user);
  const { token } = store.user;
  console.log({ token });
  return token;
};

export const selectUserParams = store => store.user.params;

export const selectIsLoadingUser = store => store.user.isLoading;

export const selectErrorUser = store => store.user.error;

export const selectUserIsLoggedIn = store => {
  return store.user.token === null ? false : true;
};
