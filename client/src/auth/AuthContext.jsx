import React, { createContext, useContext, useState } from 'react'; 

const AuthContext = createContext(); 
export function useAuth() { 
    return useContext(AuthContext); 
} 

export function AuthProvider({ children }) { 
const [user, setUser] = useState(null); 
const login = (userData) => { 
// Lógica de inicio de sesión aquí 
setUser(userData); 
};
const logout = () => { // Lógica para cerrar sesión aquí 
    setUser(null);
}; 
return ( 
<AuthContext.Provider value={{ user, login, logout }}> 
    {children}
</AuthContext.Provider> 
); 

}