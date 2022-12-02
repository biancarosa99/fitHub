import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function getInitialState() {
  const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const { token, user: data } = JSON.parse(loggedInUser);
  //     console.log("Token: " + token);
  //     console.log("user data: " + Object.values(data));
  //   }

  return loggedInUser ? JSON.parse(loggedInUser) : null;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialState);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.clear();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
