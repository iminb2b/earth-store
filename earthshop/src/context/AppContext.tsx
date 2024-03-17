import { ReactNode, createContext, useReducer } from "react";

export type AppState = {};

type AppAction = { type: "" };

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: {},
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
