import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WrapContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [overlay, setOverlay] = useState({ visible: false, child: null });
  const [user, setUser] = useState(null);
  const memoedValue = useMemo(
    () => ({
      overlay,
      setOverlay,
      user,
      setUser,
    }),
    [overlay, user]
  );
  return (
    <WrapContext.Provider value={memoedValue}>{children}</WrapContext.Provider>
  );
};

export default function useReducer() {
  return useContext(WrapContext);
}
