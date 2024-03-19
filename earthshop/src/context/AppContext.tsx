import { ProductInfo } from "@/PageComponents/HomePage";
import { ReactNode, createContext, useReducer } from "react";

export type AppState = {
  username: string | null;
  cartProductCounts: number;
  cart: Array<{
    product: ProductInfo;
    count: number;
  }>;
  recentlyViewed: ProductInfo[];
};

type AppAction =
  | { type: "changeUsername"; username: string | null }
  | { type: "addToCart"; product: ProductInfo }
  | { type: "addRecentlyViewed"; product: ProductInfo };

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "changeUsername":
      return {
        ...state,
        username: action.username,
      };
    case "addRecentlyViewed":
      const hasDuplicateProduct = state.recentlyViewed.some(
        (item) => item.id === action.product.id,
      );

      if (hasDuplicateProduct) return state;

      if (state.recentlyViewed.length > 2) {
        return {
          ...state,
          recentlyViewed: [action.product, ...state.recentlyViewed.splice(-1)],
        };
      }

      return {
        ...state,
        recentlyViewed: [action.product, ...state.recentlyViewed],
      };
    case "addToCart":
      const hasDuplicate = state.cart.some(
        (item) => item.product.id === action.product.id,
      );

      if (hasDuplicate) {
        const newList = state.cart.map((item) =>
          item.product.id === action.product.id
            ? { ...item, count: item.count + 1 }
            : item,
        );
        return {
          ...state,
          cartProductCounts: state.cartProductCounts + 1,
          cart: newList,
        };
      }
      return {
        ...state,
        cartProductCounts: state.cartProductCounts + 1,
        cart: [...state.cart, { product: action.product, count: 1 }],
      };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: {
    username: null,
    cartProductCounts: 0,
    cart: [],
    recentlyViewed: [],
  },
  dispatch: () => null,
});

export const AppProvider: React.FC<{
  children: ReactNode;
  initialState: AppState;
}> = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
