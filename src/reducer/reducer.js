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
    case "ADD_TO_CART": {
      const found = state.cart.products.find(
        (product) => product._id === action.payload.product._id
      );
      if (found) {
        if (action.payload.decrement) {
          return {
            ...state,
            cart: {
              ...state.cart,
              products: [
                ...state.cart.products.map((product) => {
                  if (product._id === action.payload.product._id) {
                    return {
                      ...product,
                      quantity:
                        Number(product.quantity) > 0
                          ? Number(product.quantity) - 1
                          : Number(product.quantity),
                    };
                  }
                  return product;
                }),
              ],
            },
          };
        }
        return {
          ...state,
          cart: {
            ...state.cart,
            products: [
              ...state.cart.products.map((product) => {
                if (product._id === action.payload.product._id) {
                  return {
                    ...product,
                    quantity: Number(product.quantity) + 1,
                  };
                }
                return product;
              }),
            ],
          },
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [
            ...state.cart.products,
            { ...action.payload.product, quantity: 1 },
          ],
        },
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [
            ...state.cart.products.filter(
              (product) => product._id !== action.payload._id
            ),
          ],
        },
      };
    case "ADD_TO_WISHLIST": {
      const found = state.wishlist.products.find(
        (product) => product._id === action.payload._id
      );
      if (found) {
        return state;
      }
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          products: [...state.wishlist.products, { ...action.payload }],
        },
      };
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          products: [
            ...state.wishlist.products.filter(
              (product) => product._id !== action.payload._id
            ),
          ],
        },
      };
    default:
      return state;
  }
};
