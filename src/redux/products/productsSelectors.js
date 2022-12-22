import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = store => store.products.items;
export const selectProductsIsLoading = store => store.products.isLoading;
export const selectProductsError = store => store.products.error;

export const selectProductsCategories = createSelector([selectProducts], products => {
  const categoryList = [];
  for (const product of products) {
    for (const category of product.categories) {
      if (!categoryList.includes(category)) categoryList.push(category);
    }
  }
  return categoryList;
});
