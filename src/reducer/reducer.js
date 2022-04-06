export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: { ...state.products, ...action.payload } };
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
    case "SORT_PRICE":
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload },
      };
    case "FILTER_CATEGORIES":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: {
            ...state.filters.categories,
            [action.payload.value]:
              !state.filters.categories[action.payload.value],
          },
        },
      };
    case "FILTER_RATINGS":
      return {
        ...state,
        filters: { ...state.filters, filterRating: action.payload },
      };
    case "FILTER_PRICE":
      return {
        ...state,
        filters: { ...state.filters, priceUpperRange: action.payload },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: [...Object.keys(state.filters.categories)].reduce(
            (acc, curr) => ({
              ...acc,
              [curr]: false,
            }),
            {}
          ),
          filterRating: null,
          priceUpperRange: null,
          sortBy: null,
        },
      };
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_WISHLIST":
      return { ...state, wishlist: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, modal: !state.modal };
    case "SET_ADDRESSES":
      return { ...state, addresses: action.payload };
    default:
      return state;
  }
};
