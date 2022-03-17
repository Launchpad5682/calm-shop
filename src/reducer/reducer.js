export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: { ...state.categories, ...action.payload },
        filters: {
          ...state.filters,
          categories: action.payload.categories.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.categoryName]: false,
            }),
            {}
          ),
        },
      };
    default:
      return state;
  }
};
