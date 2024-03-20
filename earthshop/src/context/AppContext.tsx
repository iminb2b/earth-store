import { ProductInfo } from "@/PageComponents/HomePage";
import { Cart } from "@/components/Nav/NavShoppingCart";
import { ReactNode, createContext, useReducer } from "react";

export type AppState = {
  username: string | null;
  cartProductCounts: number;
  cart: Array<Cart>;
  recentlyViewed: ProductInfo[];
};

type AppAction =
  | { type: "changeUsername"; username: string | null }
  | { type: "addToCart"; product: ProductInfo; count: number }
  | { type: "addRecentlyViewed"; product: ProductInfo }
  | { type: "addToCarts"; cart: Cart[] };

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "changeUsername":
      localStorage.setItem("user", action.username ?? "");
      return {
        ...state,
        username: action.username,
      };
    case "addToCarts":
      return {
        ...state,
        cart: action.cart,
        cartProductCounts: action.cart.reduce(
          (acc, item) => acc + item.count,
          0,
        ),
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
            ? { ...item, count: item.count + action.count }
            : item,
        );
        return {
          ...state,
          cartProductCounts: state.cartProductCounts + action.count,
          cart: newList,
        };
      }
      return {
        ...state,
        cartProductCounts: state.cartProductCounts + action.count,
        cart: [...state.cart, { product: action.product, count: action.count }],
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
