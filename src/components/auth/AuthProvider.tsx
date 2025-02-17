import React, { createContext, useContext, useState } from "react";
import { LoginDialog } from "./index";

interface AuthContextType {
  openLogin: () => void;
  closeLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <AuthContext.Provider value={{ openLogin, closeLogin }}>
      {children}
      <LoginDialog isOpen={isLoginOpen} onClose={closeLogin} />
    </AuthContext.Provider>
  );
};
